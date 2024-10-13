import {BrowserRouter, Route, Routes} from "react-router-dom";


// Pages
import {Login} from "@/pages/login";
import {Main} from "@/pages/main";
import {Register} from "@/pages/register";
import {ResetPassword} from "@/pages/resetPassword/ui/resetPassword";
import { Orders } from "@/pages/orders";
import { Staffs } from "@/pages/staffs";
import { Clients } from "@/pages/clients";
import { Settings } from "lucide-react";

export function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/staffs" element={<Staffs />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
