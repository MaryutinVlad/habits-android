import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { containers } from "@/styles/containers";
import { assets } from "@/styles/assets";
import { fonts } from "@/styles/fonts";
import { activityFonts } from "@/styles/activityFonts";
import ProfileStat from "./ProfileStat";

export default function Activity() {

  const tier = 1;
  const colors = ["#FFFFFF", "#B87333", "#C0C0C0", "#FFD700", "#00D4FF"];
  const tierColor = colors[tier];


  return (
    <View>
      <View style={containers.activity}>
        <Image
          source={require("@/assets/images/testAvatar.png")}
          style={assets.activity}
        />
        <View style={{justifyContent: "space-between"}}>
          <Text style={activityFonts.name}>
            ActivityName (<Text style={{color: tierColor }}>{tier}</Text>)
          </Text>
          <View style={containers.bars}>
            <LinearGradient
              style={{
                ...containers.tierBar,
              }}
              colors={["#FE9000", "transparent"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              locations={[.34, .34]}
            />
            <LinearGradient
              style={containers.activityBar}
              colors={["#BEC52F", "transparent"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              locations={[.34, .34]}
            />
          </View>
        </View>
        <View style={containers.activityValues}>
          <ProfileStat
            title="goal"
            value="5"
            gap={5}
            style={fonts.activityValue}
            valueColor="#2C9C24"
            postfix={undefined}
            prefix={undefined}
          />
          <ProfileStat
            title="cur"
            value="2"
            gap={5}
            style={fonts.activityValue}
            valueColor="#CB1A1A"
            postfix={undefined}
            prefix={undefined}
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