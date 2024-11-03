// Icons
import { Menu } from "lucide-react";
// Types
import { HambuergerComponentPropsType } from "./types/hambuerger.component.props.type";

const HambuergerComponent = ({ onClick }: HambuergerComponentPropsType) => {
  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-indigo-800 md:hidden"
      onClick={onClick}
    >
      <Menu className="flex h-8 w-8 shrink-0 text-white md:hidden" />
    </button>
  );
};

export { HambuergerComponent };
