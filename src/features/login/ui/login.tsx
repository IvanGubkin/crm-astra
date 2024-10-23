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
import {loginApi} from "@/shared/api";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "@/shared/store/module/userSlice";
import { getUserData } from "@/pages/staff/api";

export function LoginFeatures() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {isValid},
  } = useForm<LoginType>({mode: "onChange"});

  const onSubmit = (data: LoginType): void => {
    loginApi(data).then((res) => {
      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.access_token);
        getUserData().then((res) => {
          if (res.status === 200) {
            dispatch(login(res.data));
            navigate("/orders");
          }
        });
      }
    });
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
          <Button size="sm" disabled={!isValid} type="submit">
            Войти
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
