import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Login} from "@/pages/login";
import {Main} from "@/pages/main";
import {Register} from "@/pages/register";
import {ResetPassword} from "@/pages/resetPassword/ui/resetPassword";

export function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="reset_password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
