import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

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
          label: "Home",
          title: "Heat Map",
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
          label: "Strength",
          title: "Heat Map",
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
          label: "Volume",
          title: "Heat Map",
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
          label: "Volatility",
          title: "Heat Map",
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
          label: "Sentment",
          title: "Heat Map",
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
        tabBarButtonColor: "#A6A6B3",
        tabBarSelectedButtonColor: "#22a6ff",
        tabBarBackgroundColor: "#ffffff",
        forceTitlesDisplay: true,
        tabFontSize: 14,
        selectedTabFontSize: 14
      },
      appStyle: {
        tabBarSelectedButtonColor: "#22a6ff",
        tabBarButtonColor: "#A6A6B3",
        forceTitlesDisplay: true,
        tabFontFamily: "Avenir-Medium",
        tabFontSize: 14,
        selectedTabFontSize: 14,
        navBarHidden: true,
        navBarTitleTextCentered: true
      }
    });
  });
};

export default startTabs;
