import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "Connexio Webphone",
  webDir: "dist",
  plugins: {
    App: {
      scheme: "connexio",
    },
  },
};

export default config;
