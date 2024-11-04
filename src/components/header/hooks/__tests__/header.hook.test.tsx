import { renderHook } from "@testing-library/react";
import { HeaderHook } from "../header.hook";

describe("Sidebar Hook", () => {
  const { result } = renderHook(() => HeaderHook());
  it("should provide data", () => {
    expect(result.current).toStrictEqual(
      expect.objectContaining({
        visible: true,
        showSidebar: false,
        setShowSidebar: expect.any(Function),
      }),
    );
  });
});
