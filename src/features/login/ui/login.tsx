import {LoginType} from "@/shared/types/baseType";
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

export function LoginFeatures() {
  const {register, handleSubmit} = useForm<LoginType>();

  const onSubmit = (data: LoginType): void => {
    console.log(data);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Авторизиция на сайте</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Имя пользователя"
            {...register("username", {required: "Обязательное поле"})}
          />
          <Input
            placeholder="Пароль"
            {...register("password", {required: "Обязательное поле"})}
          />
          <Button type="submit">Войти</Button>
        </form>
      </CardContent>
    </Card>
  );
}
