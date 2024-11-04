import { renderHook } from "@testing-library/react";
import { MenuHook } from "../menu.hook";

describe("Menu Hook", () => {
  const { result } = renderHook(() => MenuHook());
  it("should provide data", () => {
    expect(result.current).toStrictEqual(expect.objectContaining({ count: 0 }));
  });
});
