import { View, Text, TextInput, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useState } from "react";

import Profile from "@/components/Profile";
import Overview from "@/components/Overview";

import { containers } from "@/styles/containers";

import Activities from "@/components/Activities";
import AddPopup from "@/components/AddPopup";

export default function HomeScreen() {

  const [isActivityPopupOpened, toggleActivityPopup] = useState(false);

  const closePopup = () => {
    toggleActivityPopup(false);
  };

  return (
    <LinearGradient
      colors={["#3B0C8E", "#1950A8"]}
      locations={[.25, .75]}
      style={containers.app}
    >
      <Profile />
      <Overview />
      <Activities
        onOpenPopup={() => toggleActivityPopup(true)}
      />
      {
        isActivityPopupOpened && (
          <AddPopup
            onClose={closePopup}
          />
        )
      }
    </LinearGradient>
  );
}
