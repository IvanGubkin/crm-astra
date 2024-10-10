import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Login} from "@/components/pages/login";
import {Main} from "@/components/pages/main";
import {Register} from "@/components/pages/register";
import {ResetPassword} from "@/components/pages/resetPassword/ui/resetPassword";

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
