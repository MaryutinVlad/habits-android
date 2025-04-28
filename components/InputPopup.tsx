import { View, Text, Image, TextInput, Pressable } from "react-native";
import { useState } from "react";

import { popupViews } from "@/styles/popupViews";
import { popupFonts } from "@/styles/popupFonts";
import { assets } from "@/styles/assets";

import { colors } from "@/constants/styles";

type Props = {
  onClose(): void,
  onSubmit(inputValue: number): void,
};

export default function InputPopup({
  onClose,
  onSubmit,
}: Props) {

  const [inputValue, setInputValue] = useState("");
  const [validationErrorMessage, setValidationErrorMessage] = useState("");

  const validateInput = () => {

    const toValidate = Number(inputValue.trim());

    if (toValidate) {

      if (toValidate === Number(toValidate.toFixed())) {

        onSubmit(toValidate);
        setInputValue("");
        setValidationErrorMessage("");

      } else {

        setValidationErrorMessage("only whole numbers");
        return;
      }

    } else {

      setValidationErrorMessage("invalid whole number");
      return;
    }
  };

  return (
    <View style={{ ...popupViews.overlay, borderRadius: 10, backgroundColor: "#000000E1" }}>
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
      <View style={{ margin: 10}}>
        <View style={{ flexDirection: "row", width: "75%", justifyContent: "space-between" }}>
          <TextInput
            placeholder="type in value"
            placeholderTextColor={colors.white}
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={12}
            style={popupFonts.name}
            value={inputValue}
            onChangeText={setInputValue}
          />
          <Pressable onPress={validateInput} style={popupViews.textButton}>
            <Text style={popupFonts.pressable}>
              submit
            </Text>
          </Pressable>
        </View>
        {
          validationErrorMessage && (
            <Text style={popupFonts.error}>
              {validationErrorMessage}
            </Text>
          )
        }
      </View>
    </View>
  )
}