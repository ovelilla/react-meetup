import { AllMeetupsHandlers } from "../all-meetups.handlers";
import { sleep } from "@/core/utils/sleep";
import axios from "axios";

jest.mock("axios");
jest.mock("@/core/utils/sleep", () => ({
  sleep: jest.fn(() => Promise.resolve()),
}));

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

describe("AllMeetupsHandlers", () => {
  const mockAddFavorite = jest.fn();
  const mockRemoveFavorite = jest.fn();
  const mockSetLoading = jest.fn();
  const mockSetMeetups = jest.fn();
  const mockAxiosGet = axios.get as jest.Mock;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call addFavorite with correct ID in handleAddToFavorites", () => {
    const { handleAddToFavorites } = AllMeetupsHandlers({
      addFavorite: mockAddFavorite,
      removeFavorite: mockRemoveFavorite,
      meetups: [],
      setLoading: mockSetLoading,
      setMeetups: mockSetMeetups,
    });

    handleAddToFavorites("1");

    expect(mockAddFavorite).toHaveBeenCalledWith("1");
  });

  it("should call removeFavorite with correct ID in handleRemoveFromFavorites", () => {
    const { handleRemoveFromFavorites } = AllMeetupsHandlers({
      addFavorite: mockAddFavorite,
      removeFavorite: mockRemoveFavorite,
      meetups: [],
      setLoading: mockSetLoading,
      setMeetups: mockSetMeetups,
    });

    handleRemoveFromFavorites("1");

    expect(mockRemoveFavorite).toHaveBeenCalledWith("1");
  });

  it("should not fetch meetups and only toggle loading when meetups already exist", async () => {
    const { handleFetchMeetups } = AllMeetupsHandlers({
      addFavorite: mockAddFavorite,
      removeFavorite: mockRemoveFavorite,
      meetups: [
        {
          id: "1",
          title: "Test Meetup",
          isFavorite: false,
          address: "123 Test Street",
          description: "This is a test meetup.",
          image: "https://example.com/image.jpg",
        },
      ],
      setLoading: mockSetLoading,
      setMeetups: mockSetMeetups,
    });

    await handleFetchMeetups();

    expect(mockSetLoading).toHaveBeenNthCalledWith(1, true);
    expect(mockSetLoading).toHaveBeenNthCalledWith(2, false);
    expect(sleep).toHaveBeenCalledWith(1000);
    expect(mockAxiosGet).not.toHaveBeenCalled();
    expect(mockSetMeetups).not.toHaveBeenCalled();
  });

  it("should fetch meetups and update state when no meetups exist", async () => {
    const mockMeetupData = [
      { id: "1", title: "Meetup 1" },
      { id: "2", title: "Meetup 2" },
    ];
    mockAxiosGet.mockResolvedValue({ data: mockMeetupData });

    const { handleFetchMeetups } = AllMeetupsHandlers({
      addFavorite: mockAddFavorite,
      removeFavorite: mockRemoveFavorite,
      meetups: [],
      setLoading: mockSetLoading,
      setMeetups: mockSetMeetups,
    });

    await handleFetchMeetups();

    expect(mockSetLoading).toHaveBeenNthCalledWith(1, true);
    expect(sleep).toHaveBeenCalledWith(1000);
    expect(mockAxiosGet).toHaveBeenCalledWith("/data.json");
    expect(mockSetMeetups).toHaveBeenCalledWith(mockMeetupData);
    expect(mockSetLoading).toHaveBeenNthCalledWith(2, false);
  });

  it("should handle API errors gracefully in handleFetchMeetups", async () => {
    mockAxiosGet.mockRejectedValue(new Error("API Error"));

    const { handleFetchMeetups } = AllMeetupsHandlers({
      addFavorite: mockAddFavorite,
      removeFavorite: mockRemoveFavorite,
      meetups: [],
      setLoading: mockSetLoading,
      setMeetups: mockSetMeetups,
    });

    await handleFetchMeetups();

    expect(mockSetLoading).toHaveBeenNthCalledWith(1, true);
    expect(sleep).toHaveBeenCalledWith(1000);
    expect(mockAxiosGet).toHaveBeenCalledWith("/data.json");
    expect(mockSetMeetups).not.toHaveBeenCalled();
    expect(mockSetLoading).toHaveBeenNthCalledWith(2, false);
  });
});

afterAll(() => {
  jest.restoreAllMocks();
});
