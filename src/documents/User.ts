export interface IUserModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  balance: number;
  points: number;
  role: AppRoles;
  createdAt: string;
  cpf: string;
  cardNumber: string;
  birthday: string | Date | null;
  photoURL?: string | File;
  address: IUserAddressModel;
  zipcode?: string;
  street?: string;
  number?: string;
  city?: string;
  state?: string;
  country?: string;
  complement?: string;
  district?: string;
}

export interface IUserAddressModel {
  zipcode: string;
  street: string;
  number: string;
  city: string;
  state: string;
  country: string;
  complement?: string;
  district: string;
}

export enum AppRoles {
  SELLER = 'seller',
  ADMIN = 'admin',
  CLIENT = 'client',
  BUSINESS = 'business',
  FFO = 'ffo-admin',
}
