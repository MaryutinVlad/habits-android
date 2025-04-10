import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import type { ActivityType, ActivityValues } from "@/types/types";

import ProfileStat from "./ProfileStat";

import { tierColors } from "@/constants/styles";
import { gallery } from "@/constants/addPopup";

import { defineStandardTiering, defineCustomTiering, defineTier } from "@/helpers/helpers";

import { containers } from "@/styles/containers";
import { assets } from "@/styles/assets";
import { fonts } from "@/styles/fonts";
import { activityFonts } from "@/styles/activityFonts";

type Props = {
  data: ActivityType,
};

export default function Activity({
  data,
}: Props) {

  const parsedTiering = JSON.parse(data.tiering)
  const tier = defineTier(data.total, parsedTiering);
  const tierColor = tierColors[tier];

  return (
    <View>
      <View style={containers.activity}>
        <Image
          source={gallery[data.portrait]}
          style={assets.activity}
        />
        <View style={{justifyContent: "space-between"}}>
          <Text style={activityFonts.name}>
            {data.title} (<Text style={{color: tierColor }}>{tier}</Text>)
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
            value={data.goal}
            gap={5}
            style={fonts.activityValue}
            valueColor="#2C9C24"
            postfix={undefined}
            prefix={undefined}
          />
          <ProfileStat
            title="cur"
            value={data.cur}
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