import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "settingsToggle") {
        this.props.navigator.push({
          screen: "heatmap.SettingsScreen",
          title: "Settings"
        });
      }
      if (event.id === "notificationsToggle") {
        this.props.navigator.push({
          screen: "heatmap.NotificationsScreen",
          title: "Notifications"
        });
      }
    }
  };

  render() {
    return (
      <View>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%"
  }
});

export default HomeScreen;
