import { RootNavigator } from "./navigation/RootNavigator";
import { QueryProvider } from "./providers";

export const App = () => {
  return (
    <QueryProvider>
      <RootNavigator />
    </QueryProvider>
  );
};
