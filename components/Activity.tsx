import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { containers } from "@/styles/containers";
import { assets } from "@/styles/assets";

export default function Activity() {
  return (
    <View>
      <View style={containers.activity}>
        <Image
          source={require("@/assets/images/testAvatar.png")}
          style={assets.activity}
        />
        <View>
          <Text>
            ActivityName
          </Text>
          <LinearGradient
            style={containers.tierBar}
            colors={["#FE9000", "transparent"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            locations={[.34, .34]}
          />
          <LinearGradient
            style={containers.activityBar}
            colors={["#BEC52F", "transparent"]}
          />
        </View>
      </View>
      <Image
        source={require("@/assets/images/intersection.png")}
        style={assets.intersection}
      />
    </View>
  )
}