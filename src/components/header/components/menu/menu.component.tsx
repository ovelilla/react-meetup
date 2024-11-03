// Vendors
import { Link } from "react-router-dom";
// Constants
import { MENU } from "./constants/menu.component.constants";
// Hooks
import { MenuHook } from "./hooks/menu.hook";

const MenuComponent = () => {
  const { count } = MenuHook();

  return (
    <nav className="hidden text-white md:flex">
      <ul className="flex gap-4">
        {MENU.map((item) => (
          <li key={item.id}>
            <Link
              className="flex h-10 items-center gap-2 rounded-md px-4 hover:bg-indigo-800"
              to={item.path}
            >
              {item.name}
              {item.id === "favorites" && (
                <span className="rounded-md bg-red-500 px-2 text-sm">
                  {count}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { MenuComponent };
