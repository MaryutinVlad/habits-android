import { View, Text } from "react-native";

import { containers } from "@/styles/containers";

import type { ReactElement } from "react";
import type { TextStyle } from "react-native";

type Props = {
  title: string,
  value: string,
  gap: number,
  style: TextStyle,
  valueColor: string | undefined,
  prefix: ReactElement | undefined,
  postfix: string | undefined,
};

export default function ProfileStat({
  title,
  value,
  gap,
  style,
  valueColor,
  postfix,
  prefix
}: Props) {
  return (
    <View style={{
      ...containers.rowFarApart,
      gap: gap ? gap : 0
    }}>
      {
        prefix && (
          prefix
        )
      }
      <Text style={style}>
        {title}:
      </Text>
      <Text style={{
        ...style,
        color: valueColor ? valueColor : style.color
      }}>
        {value}
        {postfix && (
          <Text style={style}>
            {postfix}
          </Text>
        )}
      </Text>
    </View>
  )
}