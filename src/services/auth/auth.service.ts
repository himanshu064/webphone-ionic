import { axiosBackoffice } from "@/lib/axios";
import { setLoadingAction, setUserAction } from "@/store/auth";
import { IUser } from "@/store/auth/types";
import { LoginFormValues } from "@/pages/Login";

export const login = async (payload: LoginFormValues) => {
  try {
    setLoadingAction(true);
    const { data } = await axiosBackoffice.post<IUser>("/api/auth", payload);
    console.log("login api called", data);
    setUserAction(data);
    setLoadingAction(false);
    alert(`Login Successfull - > ${JSON.stringify(data)}`);
  } catch (error) {
    alert(JSON.stringify(error));
    console.error("Login error", error);
    setLoadingAction(false);
  }
};
