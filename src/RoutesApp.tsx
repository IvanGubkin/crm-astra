import {Routes, Route} from "react-router-dom";

function RoutesApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/login" element={"Login"} />
        <Route path="/logout" element={"Logout"} />
        <Route path="/register" element={"Register"} />
        <Route path="/pass_reset" element={"PasswordReset"} />
        <Route path="/crm" element={"AuthRoutes"}>
          <Route path="/order" element={"Orders"}>
            <Route path="/create" element={"OrderCreate"} />
            <Route path="/edit:id" element={"OrderEdit"} />
            <Route path="/delete:id" element={"OrderDelete"} />
          </Route>
          <Route path="/worker" element={"Workers"}>
            <Route path="/create" element={"WorkerCreate"} />
            <Route path="/edit:id" element={"WorkersEdit"} />
            <Route path="/delete:id" element={"WorkersDelete"} />
          </Route>
          <Route path="/client" element={"Clients"}>
            <Route path="/create" element={"ClientCreate"} />
            <Route path="/edit:id" element={"ClientEdit"} />
            <Route path="/delete:id" element={"ClientDelete"} />
          </Route>
          <Route path="/category" element={"Category"}>
            <Route path="/create" element={"CategoryCreate"} />
            <Route path="/edit:id" element={"CategoryEdit"} />
            <Route path="/delete:id" element={"CategoryDelete"} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default RoutesApp;
