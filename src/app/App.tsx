import usePasswordToggle from "shared/lib/hooks/usePasswordToggle/usePasswrodToggle";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input";

interface AppProps {
  className?: string;
}

export const App = ({ className }: AppProps) => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();

  return (
    <div style={{ padding: "20px" }}>
      <Input type="text" label="Login" />
      <Input
        type={PasswordInputType}
        label="Password"
        ToggleIcon={ToggleIcon}
      />
      <br />
      <Button theme={ButtonTheme.PRIMARY}>Sign In</Button>
      <br />
      <br />
      <Button theme={ButtonTheme.SECONDARY}>Cancel</Button>
    </div>
  );
};
