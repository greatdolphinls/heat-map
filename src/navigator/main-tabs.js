import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import {
  BACKGROUND_COLOR,
  PANEL_COLOR,
  DISABLED_COLOR,
  POSITIVE_COLOR,
  SUB_FORE_COLOR
} from "@colors";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30),
    Icon.getImageSource("ios-menu", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "heatmap.HomeScreen",
          label: "HOME",
          title: "HeatMap",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "settingsToggle"
              }
            ],
            rightButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "notificationsToggle"
              }
            ]
          }
        },
        {
          screen: "heatmap.StrengthScreen",
          label: "STRENGTH",
          title: "HeatMap",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "settingsToggle"
              }
            ],
            rightButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "notificationsToggle"
              }
            ]
          }
        },
        {
          screen: "heatmap.VolumeScreen",
          label: "VOLUME",
          title: "HeatMap",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "settingsToggle"
              }
            ],
            rightButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "notificationsToggle"
              }
            ]
          }
        },
        {
          screen: "heatmap.VolatilityScreen",
          label: "VOLATILITY",
          title: "HeatMap",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "settingsToggle"
              }
            ],
            rightButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "notificationsToggle"
              }
            ]
          }
        },
        {
          screen: "heatmap.SentmentScreen",
          label: "SENTMENT",
          title: "HeatMap",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "settingsToggle"
              }
            ],
            rightButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "notificationsToggle"
              }
            ]
          }
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
  });
};

export default startTabs;
