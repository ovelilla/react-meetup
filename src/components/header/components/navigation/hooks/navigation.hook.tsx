// Vendors
import { useEffect, useState } from "react";
// Stores
import { useMeetupsStore } from "core/stores/meetups.store";
// Types
import { NavigationHookReturnType } from "./types/navigation.hook.return.type";

const NavigationHook = (): NavigationHookReturnType => {
  const [count, setCount] = useState(0);

  const { meetups, getFavorites } = useMeetupsStore();

  useEffect(() => {
    setCount(getFavorites().length);
  }, [meetups, getFavorites]);

  return { count };
};

export { NavigationHook };
