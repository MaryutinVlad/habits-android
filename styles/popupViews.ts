import { StyleSheet } from "react-native";

export const popupViews = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#0000008C",
    zIndex: 3,
  },
  close: {
    position: "absolute",
    top: 18,
    right: 18,
    width: 25,
    height: 25,
  },
  container: {
    marginHorizontal: 10,
    borderWidth: .5,
    borderRadius: 10,
    borderColor: "#D9D9D9",
    margin: "auto",
    paddingVertical: 15,
    paddingHorizontal: 10,
    gap: 10,
    alignItems: "center"
  },
  prop: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  options: {
    width: "70%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  option: {
    width: "50%",
  }
});