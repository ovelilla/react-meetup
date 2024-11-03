// Vendors
import { useEffect, useState } from "react";
// Types
import { HeaderHookReturnType } from "./types/header.hook.return.type";

const HeaderHook = (): HeaderHookReturnType => {
  const [visible, setVisible] = useState<boolean>(true);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos || currentScrollPos < 10) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return { visible, showSidebar, setShowSidebar };
};

export { HeaderHook };
