import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "@pages/home/ui";
import { Header } from "@shared/ui";

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomePage}
          options={{
            header: () => <Header />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
