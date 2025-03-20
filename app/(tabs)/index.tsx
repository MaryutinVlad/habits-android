import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { containers } from "@/styles/containers";
import { fonts } from "@/styles/fonts";

import ProfileStat from "@/components/ProfileStat";

export default function HomeScreen() {

  const profileName = "profilename";
  const sectionWidth = 260;
  const lineLength = Math.round((sectionWidth - profileName.length * 17.5) / 2);

  return (
    <LinearGradient
      colors={["#3B0C8E", "#1950A8"]}
      locations={[.25, .75]}
      style={containers.app}
    >
      <View style={containers.profile}>
        <View style={{ gap: 22 }}>
          <View style={{
            ...containers.profileName,
            width: sectionWidth,
            overflow: "hidden",
          }}>
            <View style={{ ...containers.line, width: lineLength }} />
            <Text style={fonts.profile}>
              {profileName}
            </Text>
            <View style={{ ...containers.line, width: lineLength }} />
          </View>
          <View style={{
            ...containers.rowFarApart,
            width: sectionWidth,
          }}>
            <View style={{gap: 5}}>
              <ProfileStat
                title="Day"
                value="0"
                gap={10}
                style={fonts.profileStat}
                prefix={undefined}
              />
            </View>
            <View style={{gap: 5}}>
              <ProfileStat
                title="Row"
                value="0"
                gap={10}
                style={fonts.profileStat}
                prefix={undefined}
              />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
