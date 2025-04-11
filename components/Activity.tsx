import { View, Text, Image, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

import type { ActivityType } from "@/types/types";

import ProfileStat from "./ProfileStat";

import { tierColors, colors } from "@/constants/styles";
import { gallery } from "@/constants/addPopup";

import { defineTier } from "@/helpers/helpers";

import { containers } from "@/styles/containers";
import { assets } from "@/styles/assets";
import { fonts } from "@/styles/fonts";
import { activityFonts } from "@/styles/activityFonts";
import { popupViews } from "@/styles/popupViews";
import { popupFonts } from "@/styles/popupFonts";

type Props = {
  data: ActivityType,
  deleteMode: boolean,
  onDelete(id: number): void,
};

export default function Activity({
  data,
  deleteMode,
  onDelete,
}: Props) {

  const [isMainShown, toggleMain] = useState(true);
  const [isConfirmationShown, toggleConfirmation] = useState(false);

  const { title, cur, goal, total, portrait } = data;
  const parsedTiering = JSON.parse(data.tiering)
  const tier = defineTier(data.total, parsedTiering);
  const tierColor = tierColors[tier];
  const curProgress = cur < goal ? cur / goal : goal;
  const tierProgress = tier === 5 ? 1 : total / parsedTiering[tier + 1];

  useEffect(() => {
    toggleConfirmation(false);
  }, [deleteMode]);

  return (
    <View>
      <Pressable
        style={deleteMode ? { ...containers.activity, borderColor: colors.red } : containers.activity}
        onPress={() => deleteMode && toggleConfirmation(true)}
      >
        {
          (isConfirmationShown && deleteMode) && (
            <View style={{...popupViews.overlay, borderRadius: 10}}>
              <View style={{...popupViews.container, borderWidth: 0}}>
                <Text style={popupFonts.capitalized}>delete activity ?</Text>
                <View style={{...popupViews.options, justifyContent: "space-around"}}>
                  <Pressable
                    onPress={() => onDelete(data.id)}
                  >
                    <Text style={{ ...popupFonts.capitalized, color: colors.green }}>yes</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => toggleConfirmation(false)}
                  >
                    <Text style={{ ...popupFonts.capitalized, color: colors.red }}>no</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          )
        }
        <Image
          source={gallery[portrait]}
          style={assets.activity}
        />
        <View style={{ justifyContent: "space-between" }}>
          <Text style={activityFonts.name}>
            {title} (<Text style={{ color: tierColor }}>{tier}</Text>)
          </Text>
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
      </Pressable>
      <Image
        source={require("@/assets/images/intersection.png")}
        style={assets.intersection}
      />
    </View>
  )
}