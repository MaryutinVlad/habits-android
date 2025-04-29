import { Image, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import ProfileStat from "./ProfileStat";

import { containers } from "@/styles/containers";
import { assets } from "@/styles/assets";
import { activityFonts } from "@/styles/activityFonts";
import { fonts } from "@/styles/fonts";

import { gallery } from "@/constants/addPopup";
import { tierColors } from "@/constants/styles";

type Props = {
  tier: number,
  portrait: number,
  title: string,
  goal: number,
  cur: number,
  tierProgress: number,
};

export default function ActivityMain({
  tier,
  portrait,
  title,
  goal,
  cur,
  tierProgress,
}: Props) {

  const tierColor = tierColors[tier];
  const curProgress = cur < goal ? cur / goal : goal;

  return (
    <>
      <Image
        source={gallery[portrait]}
        style={assets.activity}
      />
      <View style={{ justifyContent: "space-between", flex: 1 }}>
        <Text style={activityFonts.name}>
          {title} (<Text style={{ color: tierColor }}>{tier}</Text>)
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={containers.bars}>
            <LinearGradient
              style={containers.tierBar}
              colors={["#FE9000", "transparent"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              locations={[tierProgress, tierProgress]}
            />
            <LinearGradient
              style={containers.activityBar}
              colors={["#BEC52F", "transparent"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              locations={[curProgress, curProgress]}
            />
          </View>
          <View style={containers.activityValues}>
            <ProfileStat
              title="goal"
              value={goal}
              gap={5}
              style={fonts.activityValue}
              valueColor="#2C9C24"
              postfix={undefined}
              prefix={undefined}
            />
            <ProfileStat
              title="cur"
              value={cur}
              gap={5}
              style={fonts.activityValue}
              valueColor="#CB1A1A"
              postfix={undefined}
              prefix={undefined}
            />
          </View>
        </View>
      </View>
    </>
  )
}