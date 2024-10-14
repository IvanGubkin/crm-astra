import {$api} from "@/shared/api/baseApi";
import { LoginType } from "@/shared/types/baseType";

export const loginApi = async (data: LoginType) => {
  return await $api.post(
    "/auth",
    {...data},
    {headers: {"Content-type": "application/x-www-form-urlencoded"}}
  );
};
