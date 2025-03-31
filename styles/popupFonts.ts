import { StyleSheet } from "react-native";

import { basicFont, stdHeader, colors } from "@/constants/styles";

export const popupFonts = StyleSheet.create({
  basic: basicFont,
  header: stdHeader,
  name: {
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
  },
  selected: {
    textDecorationLine: "underline",
    color: colors.green,
  },
  suboption: {
    ...basicFont,
    width: "50%",
    textAlign: "center" 
  }
});