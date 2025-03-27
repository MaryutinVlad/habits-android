import { View, TextInput, Text } from "react-native";

import { popupFonts } from "@/styles/popupFonts";
import { popupViews } from "@/styles/popupViews";

type Props = {
  title: string,
};

export default function AddPopupSuboption({
  title
} : Props) {
  return (
    <View style={popupViews.options}>
      <Text style={popupFonts.basic}>
        {title}:
      </Text>
      <TextInput
        defaultValue="0"
      />
    </View>
  )
}