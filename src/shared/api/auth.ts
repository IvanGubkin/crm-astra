import { $api } from "./baseApi";

import { LoginType } from "@/shared/types/baseType";

export const refreshToken = async () => {
  return await $api.get("/auth/obtain-tokens").then((res) => {
    if (res.status === 200) {
      localStorage.setItem("accessToken", res.headers["x-auth-new"]);
    }
    return res;
  });
};

export const loginApi = async (data: LoginType) => {
  return await $api.post(
    "/auth",
    { ...data },
    { headers: { "Content-type": "application/x-www-form-urlencoded" } },
  );
};
