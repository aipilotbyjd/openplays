import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import {
  useColorScheme,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    LilitaOne: require("../assets/fonts/LilitaOne-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

const HeaderComponent = () => {
  const image = require("../assets/images/logo.png");
  const avatar: string =
    "https://yt3.ggpht.com/SBra9X0UPsNzyDjGcvN4iw2pb5Qku_3qFd1figMt48J7rUdU8mJYHPHAx0t6d0E6wLcUU__nZjg=s68-c-k-c0x00ffffff-no-rj";

  return (
    <View
      className="flex flex-row items-center justify-between px-4 py-2 pt-6"
      style={{ backgroundColor: "#282828" }}
    >
      <Image source={image} style={{ width: 150, height: 40 }} />

      <View className="flex flex-row items-center space-x-4">
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="md-notifications-outline" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={{ uri: avatar }}
            style={{ width: 30, height: 30, borderRadius: 15 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              header: HeaderComponent,
            }}
          />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
      </ThemeProvider>
    </>
  );
}
