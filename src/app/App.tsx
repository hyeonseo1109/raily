import { useEffect } from "react";
import { QueryProvider } from "./providers";
import { RootNavigator } from "./navigation/RootNavigator";
import { initAuthListener } from "@shared/api/auth";

export const App = () => {
  useEffect(() => {
    initAuthListener();
  }, []);

  return (
    <QueryProvider>
      <RootNavigator />
    </QueryProvider>
  );
};
