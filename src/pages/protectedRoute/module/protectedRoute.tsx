import {Header} from "@/widgets/header";
import {Navigate, Outlet} from "react-router-dom";
import {Navigate as NavigateMenu} from "@/widgets/navigate";
import { useSelector } from "react-redux";
import { RootState } from "@/shared/store";


export function ProtectedRoute() {
  const isAuthenticated = useSelector((state:RootState) => state.user.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="page">
      <Header />
      <NavigateMenu />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
