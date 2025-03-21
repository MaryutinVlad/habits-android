import { LinearGradient } from "expo-linear-gradient";

import Profile from "@/components/Profile";
import Overview from "@/components/Overview";

import { containers } from "@/styles/containers";
import Activities from "@/components/Activities";

export default function HomeScreen() {

  return (
    <LinearGradient
      colors={["#3B0C8E", "#1950A8"]}
      locations={[.25, .75]}
      style={containers.app}
    >
      <Profile/>
      <Overview/>
      <Activities/>
    </LinearGradient>
  );
}
