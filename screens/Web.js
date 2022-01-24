import { StatusBar } from 'expo-status-bar';
import {  ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { WebView } from "react-native-webview";

const Web = () => {
    const loading = () => {
        return (
          <ActivityIndicator
            color="#3235fd"
            size="large"
            style={styles.IndicatorStyle}
          />
        );
      };
  return (
    <WebView
      source={{
        uri: "https://business.dinify.io/",
      }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      renderLoading={loading}
      startInLoadingState={true}
      style={{ marginTop: 40 }}
    />
  );
};

export default Web;

const styles = StyleSheet.create({
    IndicatorStyle: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
});
