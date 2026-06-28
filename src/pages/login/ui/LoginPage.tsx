import { ImageBackground, View, Text } from "react-native";
import { loginBackground } from "@shared/assets/images";
import { styles } from "./style";

export const LoginPage = () => {
  return (
    <ImageBackground
      source={loginBackground}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <Text style={styles.text}>로그인페이지</Text>
        </View>
      </View>
    </ImageBackground>
  );
};
