import { $api } from "@/shared/api/baseApi";
import { RegisterType } from "@/shared/types/baseType";

export const registerApi = async (data:RegisterType) =>{
    return await $api.post("/crm/add", {...data})
}