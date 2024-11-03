// Vendors
import { Link } from "react-router-dom";
// Constants
import { NAVIGATION } from "./constants/navigation.component.constants";
// Hooks
import { NavigationHook } from "./hooks/navigation.hook";

const NavigationComponent = () => {
  const { count } = NavigationHook();

  return (
    <nav className="text-white">
      <ul className="flex gap-4">
        {NAVIGATION.map((item) => (
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

export { NavigationComponent };
