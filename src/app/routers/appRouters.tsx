import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";
import {refreshToken} from "@/shared/api";
import {login} from "@/shared/store/module/userSlice";
import {useEffect, useState} from "react";
import {getUserData} from "@/pages/staff/api";

// Pages
import {Login} from "@/pages/login";
import {Main} from "@/pages/main";
import {Register} from "@/pages/register";
import {Orders} from "@/pages/orders";
import {Staff, StaffGroup} from "@/pages/staff";
import {Clients} from "@/pages/clients";
import {Service} from "@/pages/service";
import {Settings} from "@/pages/settings";
import {ProtectedRoute} from "@/pages/protectedRoute";
import {StaffMain} from "@/pages/staff/ui/staffMain";

export function AppRouters() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      refreshToken().then((res) => {
        if (res.status === 200) {
          getUserData().then((res) => {
            if (res.status === 200) {
              dispatch(login(res.data));
              setLoading(false);
            }
          });
        }
      });
    }
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/orders" element={<Orders />} />
            <Route path="/staff" element={<Staff />}>
              <Route index element={<StaffMain />} />
              <Route path="groups" element={<StaffGroup />} />
            </Route>
            <Route path="/clients" element={<Clients />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/service" element={<Service />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
