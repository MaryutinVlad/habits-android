import { StyleSheet } from "react-native";

const basicFont = {
  fontFamily: "Podkova",
  color: "#FFFFFF",
  fontSize: 23,
  letterSpacing: 1
};

export const popupFonts = StyleSheet.create({
  basic: basicFont,
  underlined: {
    ...basicFont,
    textDecorationLine: "underline",
  },
  capitalized: {
    ...basicFont,
    textTransform: "capitalize",
  },
  pressable: {
    ...basicFont,
    textAlign: "center",
  }
});