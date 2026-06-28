import { useEffect } from "react";
import { QueryProvider } from "./providers";
import { initAuthListener } from "@shared/api/auth";
import { trapAuth } from "@shared/api/auth/trapAuth";
import { AuthGate } from "./navigation/authGate";

export const App = () => {
  useEffect(() => {
    initAuthListener();
    trapAuth();
  }, []);

  return (
    <QueryProvider>
      <AuthGate />
    </QueryProvider>
  );
};
