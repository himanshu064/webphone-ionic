import { useEffect } from "react";
import { SafeArea } from "@capacitor-community/safe-area";
import { Capacitor } from "@capacitor/core";

interface SafeAreaConfig {
  statusBarColor?: string;
  statusBarContent?: "light" | "dark";
  navigationBarColor?: string;
  navigationBarContent?: "light" | "dark";
  customColorsForSystemBars?: boolean;
  offset?: number;
}

/**
 * Hook to manage safe area insets in the application
 *
 * @param enabled Whether edge-to-edge mode should be enabled
 * @param config Configuration for the safe area plugin
 */
export const useSafeArea = (
  enabled: boolean = true,
  config: SafeAreaConfig = {
    customColorsForSystemBars: true,
    statusBarColor: "#00000000", // Transparent
    statusBarContent: "dark",
    navigationBarColor: "#00000000", // Transparent
    navigationBarContent: "dark",
    offset: 0,
  }
) => {
  useEffect(() => {
    // Only run on native platforms
    if (!Capacitor.isNativePlatform()) {
      return;
    }

    const setupSafeArea = async () => {
      if (enabled) {
        await SafeArea.enable({
          config: {
            customColorsForSystemBars: config.customColorsForSystemBars ?? true,
            statusBarColor: config.statusBarColor ?? "#00000000",
            statusBarContent: config.statusBarContent ?? "dark",
            navigationBarColor: config.navigationBarColor ?? "#00000000",
            navigationBarContent: config.navigationBarContent ?? "dark",
            offset: config.offset ?? 0,
          },
        });
      } else {
        await SafeArea.disable({
          config: {
            customColorsForSystemBars: config.customColorsForSystemBars ?? true,
            statusBarColor: config.statusBarColor ?? "#000000",
            statusBarContent: config.statusBarContent ?? "light",
            navigationBarColor: config.navigationBarColor ?? "#000000",
            navigationBarContent: config.navigationBarContent ?? "light",
            offset: config.offset ?? 0,
          },
        });
      }
    };

    setupSafeArea();

    // Cleanup
    return () => {
      if (Capacitor.isNativePlatform()) {
        SafeArea.disable({
          config: {
            customColorsForSystemBars: true,
            statusBarColor: "#000000",
            statusBarContent: "light",
            navigationBarColor: "#000000",
            navigationBarContent: "light",
            offset: 0,
          },
        });
      }
    };
  }, [enabled, config]);
};
