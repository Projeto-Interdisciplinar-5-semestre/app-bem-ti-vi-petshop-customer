import React, { useCallback, useEffect } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import SplashScreen from "expo-splash-screen";
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_900Black } from "@expo-google-fonts/montserrat";
import AppRoutes from "./src/routes/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": Montserrat_400Regular,
    "Montserrat-Medium": Montserrat_500Medium,
    "Montserrat-SemiBold": Montserrat_600SemiBold,
    "Montserrat-Bold": Montserrat_700Bold,
    "Montserrat-Black": Montserrat_900Black,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <AppRoutes />
      <StatusBar style="auto" />
    </View>
  );
}