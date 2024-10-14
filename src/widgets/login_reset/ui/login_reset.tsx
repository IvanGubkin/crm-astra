import { LoginFeatures } from "@/features/login";
import { ResetPasswordFeatures } from "@/features/resetPassword";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared/ui/tabs";



export function LoginAndResetWidgets() {

  return (
    <div className="flex h-[88vh] w-full items-center justify-center">
      <Tabs defaultValue="login" className="w-[450px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Войти</TabsTrigger>
          <TabsTrigger value="resetPassword">Восстановить пароль</TabsTrigger>
        </TabsList>
        <TabsContent value="login" className="">
          <LoginFeatures />
        </TabsContent>
        <TabsContent value="resetPassword">
          <ResetPasswordFeatures />
        </TabsContent>
      </Tabs>
    </div>
  );
}
