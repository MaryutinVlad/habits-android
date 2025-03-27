import { Pressable, Text } from "react-native";
import { useState } from "react";

import { popupViews } from "@/styles/popupViews";
import { popupFonts } from "@/styles/popupFonts";

type Props = {
  title: string,
  suboptions: string[],
  onToggleSuboptions(title: string, suboptions: string[]): void,
};

export default function AddPopupOption({
  title,
  suboptions,
  onToggleSuboptions,
}: Props) {

  const [isSelected, toggleSelected] = useState(false);

  return (
    <Pressable
      style={popupViews.option}
      onPress={() => {
        if (suboptions[0]) {
          onToggleSuboptions(title, suboptions);
        }
        toggleSelected(!isSelected);
      }
      }>
      <Text
        style={isSelected ?
          { ...popupFonts.pressable, ...popupFonts.selected } :
          popupFonts.pressable
        }>
        {title}
      </Text>
    </Pressable>
  )
}