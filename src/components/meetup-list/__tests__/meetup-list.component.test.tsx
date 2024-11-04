import { render, fireEvent } from "@testing-library/react";
import { MeetupListComponent } from "@/components/meetup-list/meetup-list.component";

jest.mock("@/components/meetup-list/components/meetup-item/meetup-item.component", () => ({
  MeetupItemComponent: ({
    id,
    title,
    onAddToFavorites,
    onRemoveFromFavorites,
    isFavorite,
  }: {
    id: string;
    title: string;
    onAddToFavorites: (id: string) => void;
    onRemoveFromFavorites: (id: string) => void;
    isFavorite: boolean;
  }) => (
    <div data-testid="meetup-item">
      <h2>{title}</h2>
      <button
        onClick={() =>
          isFavorite ? onRemoveFromFavorites(id) : onAddToFavorites(id)
        }
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  ),
}));

describe("MeetupListComponent", () => {
  const meetups = [
    {
      id: "1",
      title: "Meetup 1",
      address: "123 Street",
      description: "Description 1",
      image: "img1.jpg",
      isFavorite: false,
    },
    {
      id: "2",
      title: "Meetup 2",
      address: "456 Avenue",
      description: "Description 2",
      image: "img2.jpg",
      isFavorite: true,
    },
  ];

  const mockOnAddToFavorites = jest.fn();
  const mockOnRemoveFromFavorites = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render a list of MeetupItemComponent", () => {
    const { getAllByTestId } = render(
      <MeetupListComponent
        meetups={meetups}
        onAddToFavorites={mockOnAddToFavorites}
        onRemoveFromFavorites={mockOnRemoveFromFavorites}
      />,
    );

    expect(getAllByTestId("meetup-item")).toHaveLength(meetups.length);
  });

  it("should call onAddToFavorites with correct ID when button is clicked and isFavorite is false", () => {
    const { getAllByRole } = render(
      <MeetupListComponent
        meetups={meetups}
        onAddToFavorites={mockOnAddToFavorites}
        onRemoveFromFavorites={mockOnRemoveFromFavorites}
      />,
    );

    fireEvent.click(getAllByRole("button")[0]);
    expect(mockOnAddToFavorites).toHaveBeenCalledWith("1");
  });

  it("should call onRemoveFromFavorites with correct ID when button is clicked and isFavorite is true", () => {
    const { getAllByRole } = render(
      <MeetupListComponent
        meetups={meetups}
        onAddToFavorites={mockOnAddToFavorites}
        onRemoveFromFavorites={mockOnRemoveFromFavorites}
      />,
    );

    fireEvent.click(getAllByRole("button")[1]);
    expect(mockOnRemoveFromFavorites).toHaveBeenCalledWith("2");
  });
});
