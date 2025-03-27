import { View, Text, Pressable } from "react-native";
import { useState } from "react";

import AddPopupSuboptions from "./AddPopupSuboptions";

import { popupViews } from "@/styles/popupViews";
import { popupFonts } from "@/styles/popupFonts";

type Props = {
  title: string,
  options: {
    title: string,
    suboptions: string[],
  }[],
  onSelectValue(value: string): void,
};

export default function AddPopupOption({
  title,
  options,
  onSelectValue,
}: Props) {

  const [ suboptions, setSuboptions ] = useState([""]);

  return (
    <View style={popupViews.prop}>
      <Text style={popupFonts.capitalized}>
        {title}
      </Text>
      <View style={popupViews.options}>
        {
          options.map(option => (
            <Pressable
              style={popupViews.option}
              onPress={option.suboptions.length ?
                () => setSuboptions(option.suboptions) :
                () => onSelectValue(option.title)
              }>
              <Text style={popupFonts.pressable}>
                {option.title}
              </Text>
            </Pressable>
          ))
        }
        {
          suboptions[0] && (
            <AddPopupSuboptions
              suboptions={suboptions}
            />
          )
        }
      </View>
    </View>
  )
}