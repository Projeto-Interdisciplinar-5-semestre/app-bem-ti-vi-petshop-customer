import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 80,
    paddingBottom: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    elevation: 10,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
  },
  navIconContainer: {
    position: "relative",
    alignItems: "center",
    marginBottom: 4,
  },
  activeIndicator: {
    position: "absolute",
    top: -8,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#256489",
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navLabel: {
    fontSize: 12,
    color: "#256489",
    fontFamily: "Montserrat-Medium",
  },
});