import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import {
  BACKGROUND_COLOR,
  PANEL_COLOR,
  DISABLED_COLOR,
  POSITIVE_COLOR,
  SUB_FORE_COLOR
} from "@colors";

const navigatorButtons = {
  leftButtons: [
    {
      icon: require("@assets/img/icon/settings.png"),
      title: "Menu",
      id: "settingsToggle"
    }
  ],
  rightButtons: [
    {
      icon: require("@assets/img/icon/notification.png"),
      title: "Menu",
      id: "notificationsToggle"
    }
  ]
};

const startTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: "heatmap.HomeScreen",
        label: "HOME",
        title: "HeatMap",
        icon: require("@assets/img/icon/home.png"),
        navigatorButtons: navigatorButtons
      },
      {
        screen: "heatmap.StrengthScreen",
        label: "STRENGTH",
        title: "HeatMap",
        icon: require("@assets/img/icon/strength.png"),
        navigatorButtons: navigatorButtons
      },
      {
        screen: "heatmap.VolumeScreen",
        label: "VOLUME",
        title: "HeatMap",
        icon: require("@assets/img/icon/volume.png"),
        navigatorButtons: navigatorButtons
      },
      {
        screen: "heatmap.VolatilityScreen",
        label: "VOLATILITY",
        title: "HeatMap",
        icon: require("@assets/img/icon/volatility.png"),
        navigatorButtons: navigatorButtons
      },
      {
        screen: "heatmap.SentimentScreen",
        label: "SENTIMENT",
        title: "HeatMap",
        icon: require("@assets/img/icon/sentiment.png"),
        navigatorButtons: navigatorButtons
      }
    ],
    tabsStyle: {
      tabBarButtonColor: DISABLED_COLOR,
      tabBarSelectedButtonColor: POSITIVE_COLOR,
      tabBarBackgroundColor: PANEL_COLOR,
      forceTitlesDisplay: true,
      tabFontFamily: "HelveticaLT67MC",
      tabFontSize: 14,
      selectedTabFontSize: 14
    },
    appStyle: {
      screenBackgroundColor: BACKGROUND_COLOR,
      tabBarButtonColor: DISABLED_COLOR,
      tabBarSelectedButtonColor: POSITIVE_COLOR,
      tabBarBackgroundColor: PANEL_COLOR,
      forceTitlesDisplay: true,
      tabFontFamily: "HelveticaLT67MC",
      tabFontWeight: 400,
      tabFontSize: 14,
      selectedTabFontSize: 14,
      navBarHidden: true,
      navBarTitleTextCentered: true,
      navBarBackgroundColor: BACKGROUND_COLOR,
      navBarTextColor: SUB_FORE_COLOR,
      navBarButtonColor: SUB_FORE_COLOR,
      navBarTextFontSize: 25,
      navBarTextFontFamily: "HelveticaLT67MC"
    }
  });
};

export default startTabs;
