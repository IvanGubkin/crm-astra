import {NavLink} from "react-router-dom";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {UserType} from "@/shared/types";
import { CreateStaff } from "@/widgets/staff";

export function StaffMain() {
  const data = [{name: "John", email: "asdad@das.ew"}];

  const columnHelper = createColumnHelper<UserType>();

  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("email", {
      header: () => "Email",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Сотрудники</h1>

      <nav className="flex gap-1">
        <NavLink
          to="/staff"
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
          to="/staff/groups"
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
      </nav>

      <div className="mt-6 mb-6">
        <input
          type="text"
          placeholder="Поиск пользователей..."
          className="px-4 py-2 border rounded-md w-full"
        />
      </div>
      <CreateStaff />

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
