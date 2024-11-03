// Vendors
import { Outlet } from "react-router-dom";
// Components
import { HeaderComponent } from "components/header/header.component";

const AppLayout = (): React.ReactElement => (
  <>
    <HeaderComponent />
    <main className="flex-1 p-4 md:p-6">
      <Outlet />
    </main>
  </>
);

export { AppLayout };
