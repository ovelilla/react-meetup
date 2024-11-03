// Vendors
import { useState, useEffect } from "react";
// Components
import { LogoComponent } from "components/header/components/logo/logo.component";
import { NavigationComponent } from "components/header/components/navigation/navigation.component";

const HeaderComponent = () => {
  const [visible, setVisible] = useState<boolean>(true);
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

  return (
    <header
      className={`sticky left-0 top-0 z-50 flex h-16 items-center justify-between bg-indigo-700 px-4 transition-transform duration-300 md:px-6 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <LogoComponent>React Meetups</LogoComponent>
      <NavigationComponent />
    </header>
  );
};

export { HeaderComponent };
