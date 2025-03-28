import { View, Text, Pressable, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import AddPopupProp from "./AddPopupProp";

import { addPopupLayout } from "@/constants/addPopupLayout";

import { popupViews } from "@/styles/popupViews";
import { assets } from "@/styles/assets";
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
        <Text style={popupFonts.header}>
          Add activity
        </Text>
        <TextInput
          placeholder="type in name here"
          placeholderTextColor={"#FFFFFF"}
          autoCorrect={false}
          maxLength={16}
          style={popupFonts.name}
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
        <View style={popupViews.prop}>
          <Text style={popupFonts.basic}>
            Portrait:
          </Text>
          <View style={popupViews.options}>
            <Pressable style={popupViews.option}>
              <Image
                style={assets.addPortrait}
                source={require("@/assets/images/defaultPortrait.png")}
                alt="portrait"
              />
            </Pressable>
            <Pressable style={popupViews.option}>
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