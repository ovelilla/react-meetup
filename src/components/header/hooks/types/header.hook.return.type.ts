// Vendors
import { Dispatch, SetStateAction } from "react";

type HeaderHookReturnType = {
  visible: boolean;
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
};

export type { HeaderHookReturnType };
