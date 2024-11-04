import { render } from "@testing-library/react";
import { LogoComponent } from "@/components/header/components/logo/logo.component";

describe("Logo Component", () => {
  it("should render the logo", () => {
    const { getByTestId } = render(<LogoComponent>Logo</LogoComponent>);
    const logo = getByTestId("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveTextContent("Logo");
  });
});
