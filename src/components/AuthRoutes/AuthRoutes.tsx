import { Navigate, Outlet } from "react-router-dom";



// Проверка авторизован ли пользователь если да то пускаем на приватные роуты

export default function AuthRoutes() {
    const store:boolean = true

    return store ? <Outlet />: <Navigate to={"/login"}/>
}