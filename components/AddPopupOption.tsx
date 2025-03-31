import { Pressable, Text } from "react-native";

import { popupViews } from "@/styles/popupViews";
import { popupFonts } from "@/styles/popupFonts";

type Props = {
  title: string,
  suboptions: string[],
  colored: boolean,
  onSelect(title: string, suboptions: string[], colored: boolean): void,
  currentlySelected: string,
};

export default function AddPopupOption({
  title,
  suboptions,
  colored,
  onSelect,
  currentlySelected,
}: Props) {

  return (
    <Pressable
      style={popupViews.option}
      onPress={() => onSelect(title, suboptions, colored)}>
      <Text
        style={currentlySelected === title ?
          { ...popupFonts.pressable, ...popupFonts.selected } :
          popupFonts.pressable
        }>
        {title}
      </Text>
    </Pressable>
  )
}