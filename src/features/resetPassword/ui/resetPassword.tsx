import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { useForm } from "react-hook-form";

type ResetPasswordType = {
    email:string
}

export function ResetPasswordFeatures(){
    const {
        register, 
        handleSubmit
    } = useForm<ResetPasswordType>()

    const onSubmit = (data:ResetPasswordType) =>{
        console.log(data);
        
    }

    return (
      <Card>
        <CardHeader>
          <CardTitle>Сброс пароля</CardTitle>
          <CardDescription>
            На введеную вами email будет отправлена ссылка для сброса пароля
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <Input
              placeholder="Email"
              {...register("email", {required: "Обязательное поле"})}
            />
            <Button type="submit">Отправить ссылку</Button>
          </form>
        </CardContent>
      </Card>
    );
}