import { renderHook } from "@testing-library/react";
import { AddMeetupsHook } from "../add-meetups.hook";

describe("Sidebar Hook", () => {
  const { result } = renderHook(() => AddMeetupsHook());
  it("should provide data", () => {
    expect(result.current).toStrictEqual(
      expect.objectContaining({
        errors: {},
        handleSubmit: expect.any(Function),
        handleSubmitEvent: expect.any(Function),
        loading: false,
        register: expect.any(Function),
      }),
    );
  });
});
