import { View, Text, Pressable } from "react-native";

import { colors } from "@/constants/styles";

import { popupFonts } from "@/styles/popupFonts";
import { popupViews } from "@/styles/popupViews";

type Props = {
  onDelete(): void,
  onCancel(): void,
};

export default function ConfirmationPopup({
  onDelete,
  onCancel,
} : Props) {
  return (
    <View style={{ ...popupViews.overlay, borderRadius: 10 }}>
      <View style={{ ...popupViews.container, borderWidth: 0 }}>
        <Text style={popupFonts.capitalized}>delete activity ?</Text>
        <View style={{ ...popupViews.options, justifyContent: "space-around" }}>
          <Pressable
            onPress={onDelete}
          >
            <Text style={{ ...popupFonts.capitalized, color: colors.green }}>yes</Text>
          </Pressable>
          <Pressable
            onPress={onCancel}
          >
            <Text style={{ ...popupFonts.capitalized, color: colors.red }}>no</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}