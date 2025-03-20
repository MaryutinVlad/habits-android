import { StyleSheet } from "react-native";

export const containers = StyleSheet.create({
  app: {
    height: "100%",
    width: "100%",
    marginTop: 32,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  profile: {
    flexDirection: "row",
    gap: 35,
    marginTop: 10,
  },
  profileName: {
    flexDirection: "row",
    gap: 3,
  },
  line: {
    borderBottomWidth: .5,
    borderBottomColor: "#A9A9A9",
    marginVertical: "auto"
  },
  rowFarApart: {
    flexDirection: "row",
    justifyContent: "space-between",
  }
});