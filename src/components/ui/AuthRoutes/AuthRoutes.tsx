import { Navigate, Outlet } from "react-router-dom";


export default function AuthRoutes() {
    const store:boolean = true

    return store ? <Outlet />: <Navigate to={"/login"}/>
}