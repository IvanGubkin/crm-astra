import {Button} from "@/shared/ui/button";
import {Input} from "@/shared/ui/input";
import {Tabs, TabsContent} from "@/shared/ui/tabs";
import {useForm} from "react-hook-form";

type RegisterType = {
  name: string;
  description: string;
  owner_name: string;
  owner_email: string;
  owner_phone: string;
  properties?: {[key: string]: string};
  password: string;
  pincode: string;
};

export function RegisterWidgets() {
  const {register, handleSubmit} = useForm<RegisterType>();

  const onSubmit = (data: RegisterType): void => {
    console.log(data);
  };

  return (
    <Tabs
      defaultValue="register"
      className="flex justify-center items-center fixed h-full w-full"
    >
      <TabsContent value="register">
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <Input
            placeholder="Email"
            {...register("owner_email", {required: "Обязательное поле"})}
          />
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
          <Button variant={"secondary"}>Регистрация</Button>
        </form>
      </TabsContent>
    </Tabs>
  );
}
