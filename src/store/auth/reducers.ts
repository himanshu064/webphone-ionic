import { IAuthState, IAuthAction } from "./types";

export function authReducer(state: IAuthState, action: IAuthAction) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true, user: action.payload };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
}
