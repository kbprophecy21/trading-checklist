import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

// import CustomButtons
import { CustomButton } from "../../components/ui/custombutton";

/**
 *
 * @returns HomeScreen() component
 */
export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/homepageIMG.jpg")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Trading CheckList</ThemedText>
        <HelloWave />
      </ThemedView>

      <Link href="/screens/TakeTradeScreen" asChild>
        <CustomButton
          title="Take a Trade"
          onPress={() => console.log("Take a Trade")}
          style={styles.button}
        />
      </Link>

      <Link href="/screens/TakeTradeScreen" asChild>
        <CustomButton
          title="Manage a Trade"
          onPress={() => console.log("Manage a Trade")}
          style={styles.button}
        />
      </Link>

      <Link href="../screens/ExitTradeScreen" asChild>
        <CustomButton
          title="Exit a Trade"
          onPress={() => console.log("Exit a Trade")}
          style={styles.button}
        />
      </Link>
    </ParallaxScrollView>
  );
}

/**
 * Styles for HomeScreen component
 */
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 300,
    width: 450,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  button: {
    width: 150,
    height: 150,
    margin: 20,
    marginLeft: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#088948", // oringal "#6200ee",
  },
});
