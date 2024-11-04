import { render } from "@testing-library/react";
import { HeaderComponent } from "@/components/header/header.component";
import { BrowserRouter } from "react-router-dom";

jest.mock("@/components/header/hooks/header.hook", () => ({
  HeaderHook: () => ({
    visible: true,
    showSidebar: false,
    setShowSidebar: jest.fn(),
  }),
}));

describe("HeaderComponent", () => {
  it("should render header with LogoComponent and MenuComponent", () => {
    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <HeaderComponent />
      </BrowserRouter>,
    );

    expect(getByText("React Meetups")).toBeInTheDocument();
    expect(getByTestId("menu")).toBeInTheDocument();
  });
});
