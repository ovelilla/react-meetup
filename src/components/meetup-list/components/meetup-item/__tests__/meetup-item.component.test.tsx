import { render, fireEvent } from "@testing-library/react";
import { MeetupItemComponent } from "@/components/meetup-list/components/meetup-item/meetup-item.component";

describe("MeetupItemComponent", () => {
  const defaultProps = {
    id: "1",
    image: "https://example.com/image.jpg",
    title: "Sample Meetup",
    address: "123 Main St",
    description: "A great meetup to attend",
    isFavorite: false,
    onAddToFavorites: jest.fn(),
    onRemoveFromFavorites: jest.fn(),
  };

  it("should render image, title, address, and description", () => {
    const { getByAltText, getByText } = render(
      <MeetupItemComponent {...defaultProps} />,
    );

    expect(getByAltText(defaultProps.title)).toBeInTheDocument();
    expect(getByText(defaultProps.title)).toBeInTheDocument();
    expect(getByText(defaultProps.address)).toBeInTheDocument();
    expect(getByText(defaultProps.description)).toBeInTheDocument();
  });

  it("should display 'Add to Favorites' when isFavorite is false", () => {
    const { getByText } = render(
      <MeetupItemComponent {...defaultProps} isFavorite={false} />,
    );

    expect(getByText("Add to Favorites")).toBeInTheDocument();
  });

  it("should display 'Remove from Favorites' when isFavorite is true", () => {
    const { getByText } = render(
      <MeetupItemComponent {...defaultProps} isFavorite={true} />,
    );

    expect(getByText("Remove from Favorites")).toBeInTheDocument();
  });

  it("should call onAddToFavorites when button is clicked and isFavorite is false", () => {
    const { getByText } = render(
      <MeetupItemComponent {...defaultProps} isFavorite={false} />,
    );

    fireEvent.click(getByText("Add to Favorites"));

    expect(defaultProps.onAddToFavorites).toHaveBeenCalledWith(defaultProps.id);
  });

  it("should call onRemoveFromFavorites when button is clicked and isFavorite is true", () => {
    const { getByText } = render(
      <MeetupItemComponent {...defaultProps} isFavorite={true} />,
    );

    fireEvent.click(getByText("Remove from Favorites"));

    expect(defaultProps.onRemoveFromFavorites).toHaveBeenCalledWith(
      defaultProps.id,
    );
  });
});
