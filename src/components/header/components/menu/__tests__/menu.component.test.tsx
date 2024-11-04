import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MenuComponent } from "@/components/header/components/menu/menu.component";
import { MENU } from "@/components/header/components/menu/constants/menu.component.constants";

jest.mock("@/components/header/components/menu/hooks/menu.hook", () => ({
  MenuHook: () => ({ count: 5 }),
}));

describe("Menu Component", () => {
  it("should render the menu", () => {
    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <MenuComponent />
      </BrowserRouter>,
    );

    expect(getByTestId("menu")).toBeInTheDocument();

    MENU.forEach((item) => {
      expect(getByText(item.name)).toBeInTheDocument();
    });

    const favorites = MENU.find((item) => item.id === "favorites");
    if (favorites) {
      expect(getByText("5")).toBeInTheDocument();
    }
  });
});
