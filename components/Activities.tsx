import { View, Text, Pressable, Image } from "react-native";

import Activity from "./Activity";

import { fonts } from "@/styles/fonts";
import { containers } from "@/styles/containers";
import { assets } from "@/styles/assets";

type Props = {
  onOpenPopup(): void,
}

export default function Activities({
  onOpenPopup
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
      <Activity />
      <Activity />
      <Activity />
      <Activity />
      <Activity />
      <Activity />
    </View>
  )
}