import { useUserQuery } from "@shared/query";
import { RootNavigator } from "./RootNavigator";
import { LoginPage } from "@pages/login/ui/LoginPage";

export const AuthGate = () => {
  const { data: user, isLoading } = useUserQuery();

  if (isLoading) return null;

  return user ? <RootNavigator /> : <LoginPage />;
};
