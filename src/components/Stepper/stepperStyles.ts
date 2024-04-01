import { StyleSheet } from "react-native";

const stepperStyles = StyleSheet.create({
  stepper: {
    width: "100%",
    gap: 15,
    marginTop: 10,
  },
  arrows: {
    display: "flex",
    flexDirection: "row",
    gap: 25,
  },
  step: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  current: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default stepperStyles;
