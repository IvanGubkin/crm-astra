import {BrowserRouter, Route, Routes} from "react-router-dom";

// Pages
import {Login} from "@/pages/login";
import {Main} from "@/pages/main";
import {Register} from "@/pages/register";
import {Orders} from "@/pages/orders";
import {Staffs, StaffsGroup, StaffMain} from "@/pages/staffs";
import {Clients} from "@/pages/clients";
import {Service} from "@/pages/service";
import {Settings} from "@/pages/settings";
import {ProtectedRoute} from "@/pages/protectedRoute";



export function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/orders" element={<Orders />} />
          <Route path="/staffs" element={<Staffs />}>
            <Route index element={<StaffMain/>} />
            <Route path="group" element={<StaffsGroup />} />
          </Route>
          <Route path="/clients" element={<Clients />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/service" element={<Service />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
