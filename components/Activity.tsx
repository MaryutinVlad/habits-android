import { View, Image, Pressable } from "react-native";
import { useState, useEffect } from "react";

import type { ActivityType } from "@/types/types";

import ConfirmationPopup from "./ConfirmationPopup";
import ActivityMain from "./ActivityMain";
import ActivityInfo from "./ActivityInfo";

import { colors } from "@/constants/styles";

import { defineTier } from "@/helpers/helpers";

import { containers } from "@/styles/containers";
import { assets } from "@/styles/assets";

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
  const tierProgress = tier === 5 ? 1 : total / parsedTiering[tier + 1];

  useEffect(() => {
    toggleConfirmation(false);
  }, [deleteMode]);

  return (
    <View>
      <Pressable
        style={deleteMode ? { ...containers.activity, borderColor: colors.red } : containers.activity}
        onPress={() => deleteMode ? toggleConfirmation(true) : toggleMain(!isMainShown)}
      >
        {
          (isConfirmationShown && deleteMode) && (
            <ConfirmationPopup
              onDelete={() => onDelete(data.id)}
              onCancel={() => toggleConfirmation(false)}
            />
          )
        }
        {
          isMainShown ? (
            <ActivityMain
              tier={tier}
              portrait={portrait}
              title={title}
              goal={goal}
              cur={cur}
              tierProgress={tierProgress}
            />
          ) : (
            <ActivityInfo
              cur={cur}
              goal={goal}
              total={total}
              toNextTier={tier === 5 ? tier : parsedTiering[tier + 1]}
              day={data.day}
              row={data.row}
            />
          )
        }

      </Pressable>
      <Image
        source={require("@/assets/images/intersection.png")}
        style={assets.intersection}
      />
    </View>
  )
}