import { Dispatch, createSlice } from '@reduxjs/toolkit';

import httpRequest from 'src/utils/httpRequest';

import { Register } from 'src/documents/Register';

// ----------------------------------------------------------------------

const initialState: any = {
  isLoading: false,
  error: null,
  clientData: {} as Register,
  dataGrid: {
    rows: [] as Register[],
  },
};

const slice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    saveClientSuccess(state) {
      state.isLoading = false;
      state.error = false;
    },

    saveClientError(state) {
      state.isLoading = false;
      state.error = true;
    },

    saveUser(state) {
      state.isLoading = true;
      state.error = false;
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function createRegisterFFO(body: Register) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.saveUser());
    try {
      await httpRequest(`/ffo`, body);
      dispatch(slice.actions.saveClientSuccess());
    } catch (error) {
      dispatch(slice.actions.saveClientError());
      return error;
    }
    return null;
  };
}
