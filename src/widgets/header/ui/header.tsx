import {Button} from "@/shared/ui/button";
import logoAstraLyte from "../../assets/logoAstraLyte.svg";
import {cn} from "@/shared/lib/utils";
import {Link} from "react-router-dom";


export function Header() {
  return (
    <header
      className={cn("header flex items-center justify-between px-6 py-3 bg-slate-800")}
    >
      <Link to={"/"}>
        <img alt="logo" src={logoAstraLyte} />
      </Link>
      <div className="flex gap-3">
        <Button asChild variant={"secondary"}>
          <Link to={"/login"}>Войти</Link>
        </Button>
        <Button asChild variant={"secondary"}>
          <Link to={"/register"}>Регистрация</Link>
        </Button>
      </div>
    </header>
  );
}
