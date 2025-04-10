import { View, Text, Pressable, Image } from "react-native";

import type { ActivityType } from "@/types/types";

import Activity from "./Activity";

import { fonts } from "@/styles/fonts";
import { containers } from "@/styles/containers";
import { assets } from "@/styles/assets";

type Props = {
  data: ActivityType[],
  onOpenPopup(): void,
}

export default function Activities({
  data,
  onOpenPopup,
} : Props) {

  return (
    <View style={containers.stdSection}>
      <View style={containers.rowFarApart}>
        <Text style={fonts.stdHeader}>
          Activities
        </Text>
        <View style={containers.closeApart}>
          <Pressable
            onPress={() => onOpenPopup()}
          >
            <Image
              source={require("@/assets/images/add.png")}
              style={assets.actButton}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require("@/assets/images/remove.png")}
              style={assets.actButton}
            />
          </Pressable>
        </View>
      </View>
      {
        data.map((activity) => (
          <Activity
            key={activity.id}
            data={activity}
          />
        ))
      }
    </View>
  )
}