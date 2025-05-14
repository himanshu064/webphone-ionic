import { createStore } from "react-hooks-global-state";
import { IAuthState, IUser, IAuthAction, IPbxUser } from "@/store/auth/types";
import { authReducer } from "@/store/auth/reducers";

const initialState: IAuthState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  pbxUser: null,
};

const { dispatch, useStoreState, getState } = createStore<
  IAuthState,
  IAuthAction
>(authReducer, initialState);

// Actions
export const logoutAction = () => {
  dispatch({ type: "LOGOUT" });
};
export const setUserAction = (user: IUser) => {
  dispatch({ type: "LOGIN", payload: user });
};
export const setLoadingAction = (isLoading: boolean) => {
  dispatch({ type: "SET_LOADING", payload: isLoading });
};
export const setPbxUserAction = (user: IPbxUser) => {
  dispatch({ type: "SET_PBX_USER", payload: user });
};

// Hooks
export const useIsAuthenticated = () => {
  const state = useStoreState("isAuthenticated");
  return state;
};

export const useUser = () => useStoreState("user");
export const useLoading = () => useStoreState("loading");

// pbx user
export const usePbxUser = () => useStoreState("pbxUser");

// Getters
export const getIsAuthenticated = () => {
  const { isAuthenticated } = getState();
  return isAuthenticated;
};

export const getUser = () => {
  const { user } = getState();
  return user;
};

export const getPbxUser = () => {
  const { pbxUser } = getState();
  return pbxUser;
};
