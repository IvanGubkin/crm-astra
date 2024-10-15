import { $api } from "@/shared/api/baseApi";
import { RegisterType } from "@/shared/types/baseType";

export const registerApi = async (data:RegisterType) =>{
    return await $api.post("/crm/add", {...data})
}

export const emailRequestCodeApi = async (email:string) =>{
    return await $api.post("/crm/request-code",null, {params:{login:email}});
}