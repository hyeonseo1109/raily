import { Image, View } from "react-native";
import { styles } from "./style";
import { loginBackground } from "@shared/assets/images";

export const HomePage = () => {
  return (
    <View style={styles.container}>
      <Image source={loginBackground} style={styles.backgroundImage} />
    </View>
  );
};
