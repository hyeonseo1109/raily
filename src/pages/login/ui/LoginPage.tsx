import { Image, View, Text } from "react-native";
import { loginBackground } from "@shared/assets/images";
import { styles } from "./style";

export const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Image source={loginBackground} style={styles.backgroundImage} />
      <Text style={styles.text}>로그인페이지</Text>
    </View>
  );
};
