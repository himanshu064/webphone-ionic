import { IAuthState, IAuthAction } from "./types";

export function authReducer(state: IAuthState, action: IAuthAction) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true, user: action.payload };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, user: null };
    case "SET_PBX_USER":
      return { ...state, pbxUser: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
