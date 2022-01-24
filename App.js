import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Web from "./screens/Web";
import Orientation from "react-native-orientation";
export default function App() {
  return (
    <>
     <StatusBar style="auto"/>
      <Web />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
