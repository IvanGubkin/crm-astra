import {Button} from "@/shared/ui/button";
import logoAstraLyte from "@/shared/assets/logoAstraLyte.svg";
import {cn} from "@/shared/lib/utils";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/shared/store";
import {logout} from "@/shared/store/module/userSlice";
import {Avatar, AvatarFallback, AvatarImage} from "@/shared/ui";

export function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header
      className={cn(
        "header flex items-center justify-between px-6 py-3 bg-slate-800"
      )}
    >
      <Link to={"/"}>
        <img alt="logo" src={logoAstraLyte} />
      </Link>
      <div className="flex gap-4 items-center">
        {isAuthenticated ? (
          <>
            <span className="text-white">{user.userInfo?.balance}</span>
            <Avatar>
              <AvatarImage
                src={
                  user.userInfo?.profile_photo
                    ? user.userInfo.profile_photo
                    : "https://github.com/shadcn.png"
                }
                alt={user.userInfo?.id}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-white">{user.userInfo?.name}</span>
            <Button
              onClick={() => {
                handleLogout();
              }}
              variant={"secondary"}
            >
              Выйти
            </Button>
          </>
        ) : (
          <>
            <Button asChild variant={"secondary"}>
              <Link to={"/login"}>Войти</Link>
            </Button>
            <Button asChild variant={"secondary"}>
              <Link to={"/register"}>Регистрация</Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
