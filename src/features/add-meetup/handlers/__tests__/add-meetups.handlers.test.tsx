import { AddMeetupsHandlers } from "../add-meetups.handlers";
import { MeetupSchemaType } from "../../schemas/add-meetup.schema";
import { sleep } from "@/core/utils/sleep";

jest.mock("@/core/utils/sleep", () => ({
  sleep: jest.fn(() => Promise.resolve()),
}));

describe("AddMeetupsHandlers", () => {
  const defaultParams = {
    addMeetup: jest.fn(),
    reset: jest.fn(),
    setLoading: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call setLoading(true), addMeetup, reset, and setLoading(false) in order", async () => {
    const data: MeetupSchemaType = {
      title: "Test Meetup",
      address: "123 Test Street",
      description: "This is a test meetup.",
      image: "https://example.com/image.jpg",
    };

    const { handleSubmitEvent } = AddMeetupsHandlers(defaultParams);

    await handleSubmitEvent(data);

    expect(defaultParams.setLoading).toHaveBeenCalledWith(true);
    expect(sleep).toHaveBeenCalledWith(2000);
    expect(defaultParams.addMeetup).toHaveBeenCalledWith(data);
    expect(defaultParams.reset).toHaveBeenCalled();
    expect(defaultParams.setLoading).toHaveBeenCalledWith(false);
  });

  it("should set loading to true at the start and false at the end", async () => {
    const data: MeetupSchemaType = {
      title: "Another Meetup",
      address: "456 Another Street",
      description: "This is another test meetup.",
      image: "https://example.com/another-image.jpg",
    };

    const { handleSubmitEvent } = AddMeetupsHandlers(defaultParams);

    await handleSubmitEvent(data);

    expect(defaultParams.setLoading).toHaveBeenNthCalledWith(1, true);
    expect(defaultParams.setLoading).toHaveBeenNthCalledWith(2, false);
  });
});
