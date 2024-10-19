import {$api} from "./baseApi";


export const refreshToken = async () => {
  return await $api.get("/auth/obtain-tokens").then((res) => {
    if (res.status === 200) {        
      localStorage.setItem("accessToken", res.headers["x-auth-new"]);      
    }
    return res;
  });
};
