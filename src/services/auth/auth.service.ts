import { axiosBackoffice } from "@/lib/axios";
import { setLoadingAction, setUserAction } from "@/store/auth";
import { IUser } from "@/store/auth/types";

export const login = async () => {
  setLoadingAction(true);
  const { data } = await axiosBackoffice.post<IUser>("/api/auth");
  console.log("login api called", data);
  setUserAction(data);
  setLoadingAction(false);
};
