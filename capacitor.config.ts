import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "Connexio Webphone",
  webDir: "dist",
  plugins: {
    App: {
      scheme: "connexio",
    },
    Keyboard: {
      resizeOnFullScreen: false,
      backgroundColor: "#ffffff",
    },
    SafeArea: {
      enabled: true,
      customColorsForSystemBars: true,
      statusBarColor: "#00000000", // Transparent
      statusBarContent: "dark",
      navigationBarColor: "#00000000", // Transparent
      navigationBarContent: "dark",
      offset: 0,
    },
  },
};

export default config;
