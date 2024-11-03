// Vendors
import { useEffect, useState } from "react";
// Stores
import { useMeetupsStore } from "core/stores/meetups.store";
// Types
import { MenuHookReturnType } from "./types/menu.hook.return.type";

const MenuHook = (): MenuHookReturnType => {
  const [count, setCount] = useState(0);

  const { meetups, getFavorites } = useMeetupsStore();

  useEffect(() => {
    setCount(getFavorites().length);
  }, [meetups, getFavorites]);

  return { count };
};

export { MenuHook };
