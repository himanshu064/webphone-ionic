export interface IAuthState {
  loading?: boolean;
  isAuthenticated: boolean;
  user: IUser | null;
  pbxUser: IPbxUser | null;
}

export type IAuthAction =
  | { type: "LOGIN"; payload: IUser }
  | { type: "LOGOUT" }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_PBX_USER"; payload: IPbxUser };

interface IUISettings {
  theme: string;
  clock_type: boolean;
}

export type TUserRoles =
  | "ROLE_CLIENT_USER"
  | "ROLE_CLIENT_ADMIN"
  | "ROLE_STAFF_USER"
  | "ROLE_STAFF_ADMIN";

export interface IUser {
  id: number;
  username: string;
  email: string;
  roles: TUserRoles[];
  active: boolean;
  has_picture: boolean;
  name: string;
  second_name: string | null;
  preferred_name: string | null;
  last_name: string | null;
  gender: "male" | "female"; // Add other possible values if needed
  phone_number: string | null;
  client_id: number;
  full_name: string;
  identifiers: string[];
  ui_settings: IUISettings;
  csrf_token: string;
  picture: string;
}

export interface IPbxUser {
  client_id: number;
  csrf_token: string | null;
  email: string;
  full_name: string;
  gender: "male" | "female";
  has_crm: boolean;
  "has_employee-portal": boolean;
  has_monitoring: boolean;
  has_picture: boolean;
  has_workspace: boolean;
  id: number;
  identifiers: string[];
  last_name: string;
  name: string;
  picture: string;
  roles: TUserRoles[];
  username: string;
}
