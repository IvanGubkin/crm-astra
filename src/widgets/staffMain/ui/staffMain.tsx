import {NavLink} from "react-router-dom";

export function StaffMain() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Сотрудники</h1>

      <nav className="flex gap-1">
        <NavLink
          to="/staffs"
          className={({isActive}) =>
            `px-2 py-1 rounded-md ${
              isActive
                ? "bg-gray-700 text-white border border-white shadow-lg"
                : "bg-gray-500 text-white hover:bg-gray-700"
            }`
          }
        >
          Все
        </NavLink>
        <NavLink
          to="/staffs/group"
          className={({isActive}) =>
            `px-2 py-1 rounded-md ${
              isActive
                ? "bg-gray-700 text-white border border-white shadow-lg"
                : "bg-gray-500 text-white hover:bg-gray-700"
            }`
          }
        >
          Группы
        </NavLink>
        <NavLink
          to="/staffs/create"
          className={({isActive}) =>
            `px-2 py-1 rounded-md ${
              isActive
                ? "bg-gray-700 text-white border border-white shadow-lg"
                : "bg-gray-500 text-white hover:bg-gray-700"
            }`
          }
        >
          Создать пользователя
        </NavLink>
      </nav>

    <div className="mt-6">
      <input
        type="text"
        placeholder="Поиск пользователей..."
        className="px-4 py-2 border rounded-md w-full"
      />
    </div>

    


    </>
  );
}
