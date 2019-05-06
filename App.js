import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import configureStore from "@store/configureStore";

import startMainTabs from "@navigator/main-tabs";

import HomeScreen from "@screens/Home/Home";
import StrengthScreen from "@screens/Strength/Strength";
import VolumeScreen from "@screens/Volume/Volume";
import VolatilityScreen from "@screens/Volatility/Volatility";
import SentmentScreen from "@screens/Sentment/Sentment";
import NotificationsScreen from "@screens/Notifications/Notifications";
import SettingsScreen from "@screens/Sentment/Sentment";

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "heatmap.HomeScreen",
  () => HomeScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "heatmap.StrengthScreen",
  () => StrengthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "heatmap.VolumeScreen",
  () => VolumeScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "heatmap.VolatilityScreen",
  () => VolatilityScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "heatmap.SentmentScreen",
  () => SentmentScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "heatmap.NotificationsScreen",
  () => NotificationsScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "heatmap.SettingsScreen",
  () => SettingsScreen,
  store,
  Provider
);

// Start a App
startMainTabs();
