import { View, Text, Pressable, Image } from "react-native";
import { useState } from "react"; 

import type { ActivityType } from "@/types/types";

import Activity from "./Activity";

import { fonts } from "@/styles/fonts";
import { containers } from "@/styles/containers";
import { assets } from "@/styles/assets";

type Props = {
  data: ActivityType[],
  onOpenPopup(): void,
  onSubmit(inputValue: number): void,
  onDelete(id: number): void
}

export default function Activities({
  data,
  onOpenPopup,
  onSubmit,
  onDelete,
} : Props) {

  const [ deleteMode, toggleDeleteMode ] = useState(false);

  return (
    <View style={containers.stdSection}>
      <View style={containers.rowFarApart}>
        <Text style={fonts.stdHeader}>
          Activities {deleteMode && (
            <Text style={fonts.deleteMode}>
              (delete mode)
            </Text>
          )}
        </Text>
        <View style={containers.closeApart}>
          <Pressable
            onPress={() => onOpenPopup()}
          >
            <Image
              source={require("@/assets/images/add.png")}
              style={assets.actButton}
            />
          </Pressable>
          <Pressable
            onPress={() => toggleDeleteMode(!deleteMode)}
          >
            <Image
              source={require("@/assets/images/remove.png")}
              style={assets.actButton}
            />
          </Pressable>
        </View>
      </View>
      {
        data.map((activity) => (
          <Activity
            key={activity.id}
            data={activity}
            deleteMode={deleteMode}
            onSubmit={onSubmit}
            onDelete={(id) => {
              toggleDeleteMode(false);
              onDelete(id);
            }}
          />
        ))
      }
    </View>
  )
}