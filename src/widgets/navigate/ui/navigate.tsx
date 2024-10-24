import { cn } from "@/shared/lib/utils";

import { NavLink } from "react-router-dom";

export function Navigate() {
  return (
    <nav className={cn("navigate flex-1 bg-slate-800 py-4 px-4")}>
      <NavLink
        className={({ isActive }) =>
          cn(
            "block px-4 py-2 rounded-md text-white mb-2",
            isActive ? "bg-slate-600" : "hover:bg-slate-700",
          )
        }
        to={"/orders"}
      >
        <p>Заказы</p>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          cn(
            "block px-4 py-2 rounded-md text-white mb-2",
            isActive ? "bg-slate-600" : "hover:bg-slate-700",
          )
        }
        to={"/staff"}
      >
        <p>Сотрудники</p>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          cn(
            "block px-4 py-2 rounded-md text-white mb-2",
            isActive ? "bg-slate-600" : "hover:bg-slate-700",
          )
        }
        to={"/service"}
      >
        <p>Услуги</p>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          cn(
            "block px-4 py-2 rounded-md text-white mb-2",
            isActive ? "bg-slate-600" : "hover:bg-slate-700",
          )
        }
        to={"/clients"}
      >
        <p>Клиенты</p>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          cn(
            "block px-4 py-2 rounded-md text-white mb-2",
            isActive ? "bg-slate-600" : "hover:bg-slate-700",
          )
        }
        to={"/settings"}
      >
        <p>Настройки</p>
      </NavLink>
    </nav>
  );
}
