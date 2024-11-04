// Components
import { HambuergerComponent } from "./components/hamburger/hambuerger.component";
import { LogoComponent } from "@/components/header/components/logo/logo.component";
import { MenuComponent } from "@/components/header/components/menu/menu.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
// Hooks
import { HeaderHook } from "./hooks/header.hook";

const HeaderComponent = () => {
  const { visible, showSidebar, setShowSidebar } = HeaderHook();

  return (
    <header
      className={`sticky left-0 top-0 z-50 flex h-16 items-center justify-between bg-indigo-700 px-4 transition-transform duration-300 md:px-6 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <LogoComponent>React Meetups</LogoComponent>
      <MenuComponent />
      <HambuergerComponent onClick={() => setShowSidebar(true)} />
      <SidebarComponent
        {...{ showSidebar, onClose: () => setShowSidebar(false) }}
      />
    </header>
  );
};

export { HeaderComponent };
