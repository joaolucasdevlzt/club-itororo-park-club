
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { useMemo, useState, useEffect, useReducer, useCallback, createContext } from 'react';
import {
  getAuth,
  signOut,
  UserCredential,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import httpRequest from 'src/utils/httpRequest';

import { AppRoles, IUserModel } from 'src/documents/User';

import { FIREBASE_API } from '../config-global';
import {
  AuthUserType,
  ActionMapType,
  AuthStateType,
  FirebaseContextType,
} from '../documents/Firebase';

enum Types {
  INITIAL = 'INITIAL',
}

type Payload = {
  [Types.INITIAL]: {
    isAuthenticated: boolean;
    user: AuthUserType;
  };
};

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

// ----------------------------------------------------------------------

const initialState: AuthStateType = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

const reducer = (state: AuthStateType, action: ActionsType) => {
  if (action.type === Types.INITIAL) {
    return {
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      user: action.payload.user,
    };
  }
  return state;
};

// ----------------------------------------------------------------------

export const AuthContext = createContext<FirebaseContextType | null>(null);

// ----------------------------------------------------------------------

const firebaseApp = initializeApp(FIREBASE_API);

const DB = getFirestore(firebaseApp);

export const storage = getStorage(firebaseApp);
export const AUTH = getAuth(firebaseApp);
export const getDB = DB;

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [files, setFiles] = useState<(File | string)[]>([]);
  const initialize = useCallback(async () => {
    try {
      onAuthStateChanged(AUTH, async (user) => {
        if (user) {
          let profile = {};

          try {
            const response = await httpRequest(`/users/${user.uid}`, undefined, 'get');
            profile = response;
          } catch (error) {
            console.error('Erro ao obter perfil do usuário:', error);
          }

          dispatch({
            type: Types.INITIAL,
            payload: {
              isAuthenticated: true,
              user: {
                ...user,
                ...profile,
              },
            },
          });
        } else {
          dispatch({
            type: Types.INITIAL,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // ...

  const login = useCallback(async (email: string, password: string): Promise<UserCredential> => {
    try {
      const userCredential = await signInWithEmailAndPassword(AUTH, email, password);

      const { ...user } = userCredential.user;
      try {
        const response = await httpRequest(`/users/${user.uid}`, undefined, 'get');
        const userData: IUserModel = response;
        console.log('auth', userData);

        if (userData && userData.role === AppRoles.CLIENT) {
          dispatch({
            type: Types.INITIAL,
            payload: {
              isAuthenticated: true,
              user: {
                ...user,
                ...userData,
              },
            },
          });

          return userCredential;
          /* eslint-disable no-else-return */
        } else {
          dispatch({
            type: Types.INITIAL,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });

          await signOut(AUTH);

          throw new Error('Usuário não cadastrado em nosso banco de dados');
        }
      } catch (error) {
        console.error('Erro ao obter informações do usuário:', error);
        throw error;
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw error;
    }
  }, []);

  const logout = useCallback(() => {
    signOut(AUTH);
  }, []);

  const memoizedValue = useMemo(
    () => ({
      isInitialized: state.isInitialized,
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      method: 'firebase',
      login,
      logout,
      files,
      setFiles,
      initialize,
    }),
    [
      state.isAuthenticated,
      state.isInitialized,
      state.user,
      login,
      logout,
      initialize,
      files,
      setFiles,
    ]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
