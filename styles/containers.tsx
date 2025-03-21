import { StyleSheet } from "react-native";

export const containers = StyleSheet.create({
  app: {
    height: "100%",
    width: "100%",
    marginTop: 32,
    paddingHorizontal: 15,
    paddingVertical: 15,
    gap: 5,
  },
  profile: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
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
  },
  barSection: {
    flexDirection: "row",
    gap: 3,
    justifyContent: "flex-end",
    borderBottomColor: "#C0C0C0",
    borderBottomWidth: 1,
    marginBottom: 6,
  },
  bar: {
    width: 20,
    height: 75,
    borderWidth: .5,
    borderBottomWidth: 0,
    borderColor: "#80A9A9A9",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 7,
  },
  stdSection: {
    gap: 5,
    marginTop: 8
  },
  closeApart: {
    flexDirection: "row",
    gap: 8,
  },
  activity: {
    width: "100%",
    height: 110,
    flexDirection: "row",
    borderWidth: .5,
    borderColor: "#D9D9D9",
    borderRadius: 10,
    padding: 15,
  },
  tierBar: {
    width: 110,
    height: 13.5,
    borderWidth: .5,
    borderColor: "#D9D9D9",

  },
  activityBar: {

  }
});