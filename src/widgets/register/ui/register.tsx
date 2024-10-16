import {RegisterType} from "@/shared/types/baseType";
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
import {emailRequestCodeApi, registerApi} from "../api";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "@/shared/store/module/userSlice";

export function RegisterWidgets() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {isValid},
    watch,
  } = useForm<RegisterType>({mode: "onChange"});

  const email = watch("owner_email");

  const isEmailVoid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

  const onSubmit = (data: RegisterType): void => {
    registerApi(data).then((res) => {
      if (res.status === 200) {
        dispatch(
          login({
            id: res.data.id,
            name: res.data.name,
            email: res.data.email,
            phone: res.data.phone,
          })
        );
        navigate("/orders");
      }
    });
  };

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
              {...register("name", {
                required: "Обязательное поле",
                minLength: 3,
                maxLength: 24,
              })}
            />
            <Input
              placeholder="ФИО"
              {...register("owner_name", {required: "Обязательное поле"})}
            />
            <Input
              placeholder="Телефон 79991114466"
              {...register("owner_phone", {
                required: "Обязательное поле",
                pattern: {
                  value: /^[7]\d{10}$/i,
                  message: "Введите корректный номер телефона",
                },
              })}
            />
            <div className="flex gap-1">
              <Input
                placeholder="Email"
                {...register("owner_email", {
                  required: "Обязательное поле",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Введите корректный email адрес",
                  },
                })}
              />
              <Button
                disabled={!isEmailVoid}
                onClick={() => {
                  emailRequestCodeApi(email).then((e) => {
                    console.log(e);
                  });
                }}
                type="button"
              >
                Отправить код
              </Button>
            </div>
            <Input
              placeholder="Комментарий"
              {...register("description", {required: "Обязательное поле"})}
            />
            <Input
              type="password"
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
            <Button disabled={!isValid} type="submit">
              Регистрация
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
