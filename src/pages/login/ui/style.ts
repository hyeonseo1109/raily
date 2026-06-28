import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },

  popup: {
    backgroundColor: "#fffcf9",
    width: "50%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,

    boxShadow: [
      {
        offsetX: 0,
        offsetY: 0,
        blurRadius: 12,
        spreadDistance: 5,
        color: "rgba(0,0,0,0.18)",
        inset: true,
      },
    ],
  },

  text: {
    fontSize: 25,
    fontWeight: "700",
    color: "#000000",
  },
});
