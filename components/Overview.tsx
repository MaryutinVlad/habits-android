import { View, Text, Image } from "react-native";

import ProfileStat from "./ProfileStat";

import { fonts } from "@/styles/fonts";
import { containers } from "@/styles/containers";
import { assets } from "@/styles/assets";

export default function Overview() {

  //temporal hardcoded values
  const completed = 3;
  const total = 7;
  const efficency = Math.round( completed / total  * 100);
  const colors = ["#CB1A1A", "#BEC52F", "#2C9C24"];

  return (
    <View style={containers.stdSection}>
      <Text style={fonts.stdHeader}>
        Overview
      </Text>
      <View style={containers.rowFarApart}>
        <View style={{
          gap: 5,
          marginLeft: 10,
          alignItems: "flex-start"
        }}>
          <ProfileStat
            title="Efficency"
            value={`${efficency}`}
            postfix={"%"}
            gap={7}
            style={fonts.overviewItem}
            valueColor={efficency <= 33 ? colors[0] : efficency <= 66 ? colors[1] : colors[2]}
            prefix={<Image
              source={require("@/assets/images/prefix.png")}
              style={assets.prefix}
            />}
          />
          <ProfileStat
            title="Total activities"
            value={String(total)}
            postfix={undefined}
            gap={7}
            style={fonts.overviewItem}
            valueColor={undefined}
            prefix={<Image
              source={require("@/assets/images/prefix.png")}
              style={assets.prefix}
            />}
          />
          <ProfileStat
            title="Activities mastered"
            value={"1"}
            postfix={undefined}
            gap={7}
            style={fonts.overviewItem}
            valueColor={undefined}
            prefix={<Image
              source={require("@/assets/images/prefix.png")}
              style={assets.prefix}
            />}
          />
        </View>
        <Image
          source={require("@/assets/images/arrow.png")}
          style={assets.arrow}
        />
      </View>
    </View>
  )
}