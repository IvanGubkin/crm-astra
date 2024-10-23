import { UserType } from "@/shared/types";
import {
  Button,
  Input,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui";
import { useForm } from "react-hook-form";

export const CreateStaff = () => {
  const {
    register,
    handleSubmit,
  } = useForm<UserType>();

  const onSubmit = (data: UserType) => {
    console.log(data);
  };

  return (
    <Sheet>
      <SheetTrigger asChild className="mb-3">
        <Button className="bg-gray-500 text-white">Добавить сотрудника</Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle>Создание пользователя</SheetTitle>
          <SheetDescription>
            Заполните данные пользователя и нажмите "Сохранить" в дальнейшем вы
            сможете изменить данные
          </SheetDescription>
        </SheetHeader>
        <form
          className="flex flex-col gap-3 mt-3 mb-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            placeholder="ФИО"
            {...register("name", {required: "Обязательное поле"})}
          />
          <Input
            placeholder="Телефон"
            {...register("phone", {required: "Обязательное поле"})}
          />
          <Input
            placeholder="Email"
            {...register("email", {required: "Обязательное поле"})}
          />
          <Input
            placeholder="Адрес"
            {...register("address", {required: "Обязательное поле"})}
          />
          <SheetFooter>
            <Button type="submit">Сохранить</Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};
