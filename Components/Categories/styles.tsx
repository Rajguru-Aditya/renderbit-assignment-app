import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    gap: 20,
  },

  text: {
    fontSize: 16,
    color: '#000',
  },

  category: {
    height: 50,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#000",
    flexDirection: "row",
  },

  categoryIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
})

export default styles