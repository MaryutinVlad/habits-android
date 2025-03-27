import { View, Text, Pressable, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import AddPopupProp from "./AddPopupProp";

import { addPopupLayout } from "@/constants/addPopupLayout";

import { containers } from "@/styles/containers";
import { popupViews } from "@/styles/popupViews";
import { assets } from "@/styles/assets";
import { fonts } from "@/styles/fonts";
import { popupFonts } from "@/styles/popupFonts";

type Props = {
  onClose(): void
};

export default function AddPopup({
  onClose
}: Props) {

  return (
    <View style={popupViews.overlay}>
      <LinearGradient
        style={popupViews.container}
        colors={["#644994", "#1C0B3A"]}
        locations={[.25, .75]}
      >
        <Pressable
          onPress={() => {
            onClose();
          }}
          style={popupViews.close}>
          <Image
            source={require("@/assets/images/close.png")}
            style={assets.close}
          />
        </Pressable>
        <Text style={fonts.stdHeader}>
          Add activity
        </Text>
        <TextInput
          placeholder="type in name here"
          placeholderTextColor={"#FFFFFF"}
          autoCorrect={false}
          maxLength={16}
          style={popupFonts.underlined}
        />
        {
          addPopupLayout.map(item => (
            <AddPopupProp
              key={item.title}
              title={item.title}
              options={item.options}
              onSelectValue={(value) => console.log(value)}
            />
          ))
        }
        <View style={containers.addActivityOption}>
          <Text style={{
            ...popupFonts.basic,
            ...fonts.addActivityPropName,
          }}>
            Portrait:
          </Text>
          <View style={containers.addActivityValues}>
            <Pressable style={containers.optionItem}>
              <Image
                style={assets.addPortrait}
                source={require("@/assets/images/defaultPortrait.png")}
                alt="portrait"
              />
            </Pressable>
            <Pressable style={containers.optionItem}>
              <Image
                style={assets.addPortrait}
                source={require("@/assets/images/saveButton.png")}
                alt="portrait"
              />
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}