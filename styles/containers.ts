import { StyleSheet } from "react-native";

export const containers = StyleSheet.create({
  app: {
    height: "100%",
    width: "100%",
    marginTop: 32,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 35,
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
    paddingLeft: 10,
    paddingVertical: 10,
    paddingRight: 15,
  },
  bars: {
    gap: 2,
    zIndex: 1,
    alignSelf: "flex-end",
  },
  tierBar: {
    width: 90,
    height: 15,
    borderWidth: .5,
    borderColor: "#D9D9D9",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 10,
    marginLeft: -2,
  },
  activityBar: {
    width: 200,
    height: 30,
    borderWidth: .5,
    borderColor: "#D9D9D9",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 30,
    marginLeft: -43,
    marginBottom: -1
  },
  activityValues: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    gap: 0,
    marginLeft: "auto",
  },
  addActivityOption: {
    flexDirection: "row",
    width: "100%",
  },
  addActivityValues: {
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "70%",
  },
  optionItem: {
    width: "50%",
    borderColor: "#D9D9D9",
  },
  activityInfo: {
    paddingLeft: 5,
    width: "100%",
    justifyContent: "center",
  }
});