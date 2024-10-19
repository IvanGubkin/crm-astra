import { $api } from "./baseApi";

export const getUserData = async () => {
  return await $api.get("/users/get/me", {
    headers: {Authorization: `Bearer ${localStorage.getItem("accessToken")}`},
  });
};
