import {Header} from "@/widgets/header";
import {Navigate, Outlet} from "react-router-dom";
import {Navigate as NavigateMenu} from "@/widgets/navigate";

export function ProtectedRoute() {
  const isAuthenticated = true;

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
