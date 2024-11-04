import { renderHook } from "@testing-library/react";
import { AllMeetupsHook } from "../all-meetups.hook";

describe("Sidebar Hook", () => {
  const { result } = renderHook(() => AllMeetupsHook());
  it("should provide data", () => {
    expect(result.current).toStrictEqual(
      expect.objectContaining({
        handleAddToFavorites: expect.any(Function),
        handleRemoveFromFavorites: expect.any(Function),
        loading: true,
        meetups: [],
      }),
    );
  });
});
