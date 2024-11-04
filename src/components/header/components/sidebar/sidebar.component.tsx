// Vendors
import { Link } from "react-router-dom";
// Constants
import { NAVIGATION } from "./constants/sidebar.component.constants";
// Hooks
import { SidebarHook } from "./hooks/sidebar.hook";
// Icons
import { X } from "lucide-react";
// Types
import { SidebarComponentPropsType } from "./types/sidebar.component.props.type";

const SidebarComponent = ({
  onClose,
  showSidebar,
}: SidebarComponentPropsType) => {
  const { count } = SidebarHook({ showSidebar });

  if (!showSidebar) {
    return null;
  }

  return (
    <div
      className="fixed left-0 top-0 z-50 h-dvh w-full bg-black/20 md:hidden"
      onClick={onClose}
      data-testid="sidebar"
    >
      <div className="flex h-full w-72 flex-col gap-6 bg-white px-4 py-6 shadow-md">
        <button
          className="flex h-10 w-10 items-center justify-center self-end rounded-md hover:bg-indigo-100"
          onClick={onClose}
          data-testid="close-button"
        >
          <X className="flex h-8 w-8 shrink-0" />
        </button>

        <nav className="">
          <ul className="flex flex-col gap-4">
            {NAVIGATION.map((item) => (
              <li key={item.id}>
                <Link
                  className="flex h-10 items-center gap-2 rounded-md px-4 hover:bg-indigo-100"
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
      </div>
    </div>
  );
};

export { SidebarComponent };
