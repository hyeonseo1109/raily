import { View, Text } from "react-native";
import { styles } from "./style";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Raily</Text>
    </View>
  );
};
