import { render } from "@testing-library/react";
import { HambuergerComponent } from "@/components/header/components/hamburger/hambuerger.component";

describe("Hambuerger Component", () => {
  it("should render the hamburger", () => {
    const { getByTestId } = render(<HambuergerComponent onClick={() => {}} />);
    const hamburger = getByTestId("hamburger");
    expect(hamburger).toBeInTheDocument();
  });

  it("should call the onClick function", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<HambuergerComponent onClick={onClick} />);
    const hamburger = getByTestId("hamburger");
    hamburger.click();
    expect(onClick).toHaveBeenCalled();
  });
});
