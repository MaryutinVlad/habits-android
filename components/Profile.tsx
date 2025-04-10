import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ProfileStat from './ProfileStat';

import { levelRequirements } from '@/constants/general';

import { defineLevel } from '@/helpers/helpers';

import { containers } from '@/styles/containers';
import { fonts } from '@/styles/fonts';
import { assets } from '@/styles/assets';

type Props = {
  name: string,
  day: number,
  row: number,
  exp: number,
};

export default function Profile({
  name,
  day,
  row,
  exp,
} : Props) {

  const { level, expOfNextLevel } = defineLevel(exp, levelRequirements);
  const levelColors = [ "#B87333", "#C0C0C0", "#FFD700", "#00D4FF" ];
  const toLevelBar = 1 - expOfNextLevel;

  const sectionWidth = 260;
  const lineLength = Math.round((sectionWidth - name.length * 17.5) / 2);

  return (
    <View style={containers.profile}>
      <View style={{ gap: 22 }}>
        <View style={{
          ...containers.profileName,
          width: sectionWidth,
          overflow: "hidden",
        }}>
          <View style={{ ...containers.line, width: lineLength }} />
          <Text style={fonts.profile}>
            {name}
          </Text>
          <View style={{ ...containers.line, width: lineLength }} />
        </View>
        <View style={{
          ...containers.rowFarApart,
          width: sectionWidth,
        }}>
          <View style={{ gap: 8 }}>
            <ProfileStat
              title="Day"
              value={day}
              gap={10}
              style={fonts.profileStat}
              valueColor={undefined}
              prefix={undefined}
              postfix={undefined}
            />
            <Image
              source={require("@/assets/images/space.png")}
              style={assets.undersection}
            />
          </View>
          <View style={{ gap: 8 }}>
            <ProfileStat
              title="Row"
              value={row}
              gap={10}
              style={fonts.profileStat}
              valueColor={undefined}
              prefix={undefined}
              postfix={undefined}
            />
            <Image
              source={require("@/assets/images/space.png")}
              style={assets.undersection}
            />
          </View>
        </View>
      </View>
      <View style={{
        marginTop: "auto",
      }}>
        <View style={containers.barSection}>
          <Text style={{
            ...fonts.level,
            color: levelColors[Math.floor(level / 10)],
            marginBottom: -5,
          }}>
            {level}
          </Text>
          <LinearGradient
            colors={["transparent", "#B4A126"]}
            locations={[toLevelBar, toLevelBar]}
            style={containers.bar}
          />
        </View>
        <Image
          source={require("@/assets/images/intersectionSmall.png")}
          style={assets.intersectionSmall}
        />
      </View>
    </View>
  );
}
