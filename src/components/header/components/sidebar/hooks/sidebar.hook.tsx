// Vendors
import { useEffect, useState } from "react";
// Stores
import { useMeetupsStore } from "@/core/stores/meetups.store";
// Types
import { SidebarHookPropsType } from "./types/sidebar.hook.props.type";
import { SidebarHookReturnType } from "./types/sidebar.hook.return.type";

const SidebarHook = ({
  showSidebar,
}: SidebarHookPropsType): SidebarHookReturnType => {
  const [count, setCount] = useState(0);

  const { meetups, getFavorites } = useMeetupsStore();

  useEffect(() => {
    setCount(getFavorites().length);
  }, [meetups, getFavorites]);

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSidebar]);

  return { count };
};

export { SidebarHook };
