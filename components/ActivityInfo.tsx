import { View } from "react-native";

import ProfileStat from "./ProfileStat";

import { colors } from "@/constants/styles";

import { fonts } from "@/styles/fonts";
import { containers } from "@/styles/containers";

type Props = {
  cur: number,
  goal: number,
  total: number,
  toNextTier: number,
  day: number,
  row: number,
};

export default function activityInfo({
  cur,
  goal,
  total,
  toNextTier,
  day,
  row,
}: Props) {

  return (
    <View style={containers.activityInfo}>
      <ProfileStat
        title="day"
        value={day}
        gap={10}
        style={fonts.activityValue}
        valueColor={colors.white}
        postfix={undefined}
        prefix={undefined}
      />
      <ProfileStat
        title="row"
        value={row}
        gap={10}
        style={fonts.activityValue}
        valueColor={colors.white}
        postfix={undefined}
        prefix={undefined}
      />
      <ProfileStat
        title="today"
        value={`${cur} / ${goal}`}
        gap={5}
        style={fonts.activityValue}
        valueColor={cur >= goal ? colors.green : colors.white}
        postfix={undefined}
        prefix={undefined}
      />
      <ProfileStat
        title="tier progress"
        value={`${total} / ${toNextTier}`}
        gap={5}
        style={fonts.activityValue}
        valueColor={total >= toNextTier ? colors.green : colors.white}
        postfix={undefined}
        prefix={undefined}
      />
    </View>
  )
};