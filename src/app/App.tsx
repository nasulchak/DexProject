import { LoginForm } from "features/loginForm/ui/LoginForm";

interface AppProps {
  className?: string;
}

export const App = ({ className }: AppProps) => {

  return (
    <LoginForm />
  );
};
