import { RegisterType } from "@/shared/types/baseType";
import {Button} from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import {Input} from "@/shared/ui/input";

import {useForm} from "react-hook-form";



export function RegisterWidgets() {
  const {
    register,
    handleSubmit,
    formState:{errors}
    
  } = useForm<RegisterType>();

  const onSubmit = (data: RegisterType): void => {
    console.log(data);
  };
  console.log(errors);
  
 
 

  return (
    <div className="grid place-content-center h-[88vh]">
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle>Регистариция СRM</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <Input
              placeholder="Название организации"
              {...register("name", {required: "Обязательное поле"})}
            />
            <Input
              placeholder="Ваше имя"
              {...register("owner_name", {required: "Обязательное поле"})}
            />
            <Input
              placeholder="Ваш телефон"
              {...register("owner_phone", {required: "Обязательное поле"})}
            />
            <div className="flex gap-1">
              <Input
                placeholder="Email"
                {...register("owner_email", {required: "Обязательное поле"})}
              />
              <Button disabled={false} onClick={()=>{console.log(1);
              }} type="button" >Отправить код</Button>
            </div>
            <Input
              placeholder="Комментарий"
              {...register("description", {required: "Обязательное поле"})}
            />
            <Input
              placeholder="Пароль"
              {...register("password", {
                required: "Обязательное поле",
                minLength: 6,
              })}
            />
            <Input
              placeholder="Pin с email"
              {...register("pincode", {required: "Обязательное поле"})}
            />
            <Button type="submit">Регистрация</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
