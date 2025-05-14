import { axios, axiosBackoffice } from "@/lib/axios";
import {
  setLoadingAction,
  setPbxUserAction,
  setUserAction,
} from "@/store/auth";
import { IPbxUser, IUser } from "@/store/auth/types";
import { LoginFormValues } from "@/pages/Login";
import { AxiosError } from "axios";

const requestAuthToken = async () => {
  try {
    const { data } = await axiosBackoffice.get<string[]>(
      "/api/request_authorisation_tokens?limit=1"
    );
    return data?.[0] || "";
  } catch (error) {
    console.error("Error requesting auth token", error);
    throw error;
  }
};

export const login = async (payload: LoginFormValues) => {
  try {
    setLoadingAction(true);
    const { data } = await axiosBackoffice.post<IUser>("/api/auth", payload);

    // pbx api
    try {
      const { data: pbxData } = await axios.get<IPbxUser>("/user/check_auth");
      alert(`pbxData 1st -> ${JSON.stringify(pbxData)}`);
      setPbxUserAction(pbxData);
    } catch (error: unknown) {
      console.log(error, "pbx api error");
      if (error instanceof AxiosError) {
        // Check status code if 401
        if (error.response?.status === 401) {
          // we need to request auth token
          const token = await requestAuthToken();
          alert(`Token -> ${token}`);
          const { data: pbxData } = await axios.get<IPbxUser>(
            `/user/check_auth?auth_token=${token}`
          );
          alert(`pbxData 2nd -> ${JSON.stringify(pbxData)}`);
          setPbxUserAction(pbxData);
        }
      }
    }
    setUserAction(data);
    setLoadingAction(false);
    alert(`Login Successfull - > ${JSON.stringify(data)}`);
  } catch (error) {
    alert(JSON.stringify(error));
    console.error("Login error", error);
    setLoadingAction(false);
  }
};
