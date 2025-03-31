import { View, TextInput, Text } from "react-native";
import { useState } from "react";

import { popupFonts } from "@/styles/popupFonts";
import { popupViews } from "@/styles/popupViews";

type Props = {
  title: string,
  index: number,
  color: string,
  onChangeSuboptionValue(title: string, value: string): void,
};

export default function AddPopupSuboption({
  title,
  color,
  onChangeSuboptionValue,
} : Props) {

  const [ inputValue, setInputValue ] = useState("");

  return (
    <View style={popupViews.suboptions}>
      <Text style={{
        ...popupFonts.suboption,
        color: color,
      }}>
        {title}:
      </Text>
      <TextInput
        style={popupFonts.suboption}
        keyboardType="number-pad"
        onChangeText={(value) => {
          if (Number(value) || value === "") {
            const newValue = String(Number(value.trim()).toFixed());
            setInputValue(newValue);
            onChangeSuboptionValue(title, newValue);
          }
        }}
        maxLength={7}
        placeholder="0"
        placeholderTextColor={"#FFFFFF"}
        value={inputValue}
      />
    </View>
  )
}