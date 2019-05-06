import React from "react";
import { View, StyleSheet } from "react-native";
import { BACKGROUND_COLOR } from "@colors";

const BackgroundView = props => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: BACKGROUND_COLOR,
    height: "100%"
  }
});

export default BackgroundView;
