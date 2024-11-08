// Types
import { LogoComponentPropsType } from "./types/logo.component.props.type";

const LogoComponent = ({ children }: LogoComponentPropsType) => (
  <a href="/" className="text-xl font-bold text-white" data-testid="logo">
    {children}
  </a>
);

export { LogoComponent };
