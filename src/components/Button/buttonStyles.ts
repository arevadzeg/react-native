import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#5DBF10",
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 40,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "800",
    color: "#fff",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});

export default buttonStyles;
