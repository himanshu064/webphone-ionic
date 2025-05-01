Here's the markdown version of your setup steps, formatted clearly for documentation:

```markdown
# Capacitor Android Setup Guide

## 1. Install Capacitor Core and CLI

```bash
npm install @capacitor/core @capacitor/cli
```

## 2. Initialize Capacitor

```bash
npx cap init
```

## 3. Add Android Platform

```bash
ionic cap add android
```

## 4. Build Ionic App for Production

```bash
ionic build --prod
```

## 5. Sync Android with Capacitor

```bash
ionic cap sync android
```

## 6. Generate App Icons and Splash Screens

1. Create an `assets` folder in the root directory (same level as `src`).
2. Add your `icon.png` and `splash.png` files inside the `assets` folder.

```bash
npm install @capacitor/assets
npx capacitor-assets generate
```

## 7. Copy Build to Android Platform

```bash
ionic capacitor copy android
```

## 8. Build Android Debug APK

```bash
cd android
./gradlew assembleDebug
```

## 9. Test App on Emulator

```bash
ionic cap run android
```

## 10. Download JDK 24

Download and install JDK 24 from Azul:

👉 [Download JDK 24](https://www.azul.com/downloads/?package=jdk#zulu)
```