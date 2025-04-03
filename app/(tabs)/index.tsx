import Animated, { useAnimatedRef } from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import type { ActivityValues } from '@/types/types';

import Profile from "@/components/Profile";
import Overview from "@/components/Overview";

import { containers } from "@/styles/containers";

import Activities from "@/components/Activities";
import AddPopup from "@/components/AddPopup";

export default function HomeScreen() {

  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  const [isActivityPopupOpened, toggleActivityPopup] = useState(false);

  const addActivity = (selectedValues: ActivityValues, portraitIndex: number, activityName: string) => {
    console.log(selectedValues);
    console.log(portraitIndex);
    closePopup();
  }

  const closePopup = () => {
    toggleActivityPopup(false);
  };

  return (
    <GestureHandlerRootView>

      <LinearGradient
        colors={["#3B0C8E", "#1950A8"]}
        locations={[.25, .75]}
        style={containers.app}
      >
        <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16} showsVerticalScrollIndicator={false}>

          <Profile />
          <Overview />
          <Activities
            onOpenPopup={() => toggleActivityPopup(true)}
          />
        </Animated.ScrollView>
        {
          isActivityPopupOpened && (
            <AddPopup
              onAddActivity={(selectedValues, portraitIndex, activityName) => addActivity(selectedValues, portraitIndex, activityName)}
              onClose={closePopup}
            />
          )
        }
      </LinearGradient>
    </GestureHandlerRootView>
  );
}
