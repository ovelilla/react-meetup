import { renderHook } from "@testing-library/react";
import { SidebarHook } from "../sidebar.hook";

describe("Sidebar Hook", () => {
  const props = { showSidebar: true };
  const { result } = renderHook(() => SidebarHook(props));
  it("should provide data", () => {
    expect(result.current).toStrictEqual(expect.objectContaining({ count: 0 }));
  });
});
