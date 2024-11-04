import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { SidebarComponent } from "@/components/header/components/sidebar/sidebar.component";
import { NAVIGATION } from "@/components/header/components/sidebar/constants/sidebar.component.constants";

jest.mock("@/components/header/components/sidebar/hooks/sidebar.hook", () => ({
  SidebarHook: () => ({ count: 3 }),
}));

describe("SidebarComponent", () => {
  const mockOnClose = jest.fn();

  it("should not render when showSidebar is false", () => {
    const { queryByTestId } = render(
      <BrowserRouter>
        <SidebarComponent onClose={mockOnClose} showSidebar={false} />
      </BrowserRouter>,
    );

    expect(queryByTestId("sidebar")).not.toBeInTheDocument();
  });

  it("should render when showSidebar is true", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SidebarComponent onClose={mockOnClose} showSidebar={true} />
      </BrowserRouter>,
    );

    expect(getByTestId("sidebar")).toBeInTheDocument();
  });

  it("should call onClose when clicking on overlay", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SidebarComponent onClose={mockOnClose} showSidebar={true} />
      </BrowserRouter>,
    );

    fireEvent.click(getByTestId("sidebar"));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("should call onClose when clicking on close button", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SidebarComponent onClose={mockOnClose} showSidebar={true} />
      </BrowserRouter>,
    );

    fireEvent.click(getByTestId("close-button"));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("should display the count in favorites link if exists", () => {
    const { getByText } = render(
      <BrowserRouter>
        <SidebarComponent onClose={mockOnClose} showSidebar={true} />
      </BrowserRouter>,
    );

    const favorites = NAVIGATION.find((item) => item.id === "favorites");
    if (favorites) {
      expect(getByText("3")).toBeInTheDocument();
    }
  });
});
