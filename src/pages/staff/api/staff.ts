import { $api } from "@/shared/api";
import { UserType } from "@/shared/types";


export const getUserData = async () => {
  return await $api.get("/users/get/me", {
    headers: {Authorization: `Bearer ${localStorage.getItem("accessToken")}`},
  });
};

export const getUsersList = async () => {
  return await $api.get("/users/all")
}

export const addUser = async (data: UserType) => {
  return await $api.post("/users/add", data)
}
