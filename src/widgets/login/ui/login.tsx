import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Tabs, TabsContent } from "@/shared/ui/tabs"
import { useForm } from "react-hook-form"
import { LoginType } from "./type"

export function LoginWidgets(){
    const {
        register,
        handleSubmit,
    }= useForm<LoginType>()
    return (
      <Tabs defaultValue="login" className="flex justify-center alight-center">
        <TabsContent
          value="login"
          className="max-w-96 p-6  bg-slate-800 rounded-md"
        >
          <div className="text-white text-center mb-6">
            Авторизиция на сайте
          </div>
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit((e) => {
              console.log(e);
            })}
          >
            <Input
              placeholder="Имя пользователя"
              {...register("login", {required: "Обязательное поле"})}
            />
            <Input
                className={cn("border-0")}
              placeholder="Пароль"
              {...register("password", {required: "Обязательное поле"})}
            />
            <div>
              <Button variant={"secondary"} className="w-full" type="submit">
                Войти
              </Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    );
}