import { render } from "@testing-library/react";
import { AllMeetupsPage } from "@/pages/all-meetups/all-meetups.page";
import { MeetupListComponent } from "@/components/meetup-list/meetup-list.component";
import { AllMeetupsHook } from "@/pages/all-meetups/hooks/all-meetups.hook";

jest.mock("@/components/meetup-list/meetup-list.component", () => ({
  MeetupListComponent: jest.fn(() => <div data-testid="meetup-list" />),
}));

jest.mock(
  "@/components/meetup-list-skeleton/meetup-list-skeleton.component",
  () => ({
    MeetupListSkeletonComponent: jest.fn(() => <div data-testid="skeleton" />),
  }),
);

jest.mock("@/pages/all-meetups/hooks/all-meetups.hook");

describe("AllMeetupsPage", () => {
  const mockHandleAddToFavorites = jest.fn();
  const mockHandleRemoveFromFavorites = jest.fn();

  beforeEach(() => {
    (AllMeetupsHook as jest.Mock).mockReturnValue({
      handleAddToFavorites: mockHandleAddToFavorites,
      handleRemoveFromFavorites: mockHandleRemoveFromFavorites,
      loading: false,
      meetups: [
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
      ],
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the title 'All Meetups'", () => {
    const { getByText } = render(<AllMeetupsPage />);
    expect(getByText("All Meetups")).toBeInTheDocument();
  });

  it("should render MeetupListSkeletonComponent when loading is true", () => {
    (AllMeetupsHook as jest.Mock).mockImplementationOnce(() => ({
      handleAddToFavorites: mockHandleAddToFavorites,
      handleRemoveFromFavorites: mockHandleRemoveFromFavorites,
      loading: true,
      meetups: [],
    }));

    const { getByTestId } = render(<AllMeetupsPage />);
    expect(getByTestId("skeleton")).toBeInTheDocument();
    expect(MeetupListComponent).not.toBeCalled();
  });

  it("should render MeetupListComponent with meetups data when loading is false", () => {
    const { getByTestId } = render(<AllMeetupsPage />);

    expect(getByTestId("meetup-list")).toBeInTheDocument();
    expect(MeetupListComponent).toHaveBeenCalledWith(
      {
        meetups: [
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
        ],
        onAddToFavorites: mockHandleAddToFavorites,
        onRemoveFromFavorites: mockHandleRemoveFromFavorites,
      },
      {},
    );
  });
});
