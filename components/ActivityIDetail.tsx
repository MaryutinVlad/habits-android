import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";

import ProfileStat from "./ProfileStat";

import { colors } from "@/constants/styles";

import { fonts } from "@/styles/fonts";
import { containers } from "@/styles/containers";
import { popupViews } from "@/styles/popupViews";
import { popupFonts } from "@/styles/popupFonts";

type Props = {
  cur: number,
  goal: number,
  total: number,
  toNextTier: number,
  day: number,
  row: number,
  onSubmit(inputValue: number): void,
};

export default function activityDetail({
  cur,
  goal,
  total,
  toNextTier,
  day,
  row,
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
    <View style={containers.activityInfo}>
      <ProfileStat
        title="day"
        value={day}
        gap={10}
        style={fonts.activityValue}
        valueColor={colors.white}
        postfix={undefined}
        prefix={undefined}
      />
      <ProfileStat
        title="row"
        value={row}
        gap={10}
        style={fonts.activityValue}
        valueColor={colors.white}
        postfix={undefined}
        prefix={undefined}
      />
      <ProfileStat
        title="today"
        value={`${cur} / ${goal}`}
        gap={5}
        style={fonts.activityValue}
        valueColor={cur >= goal ? colors.green : colors.white}
        postfix={undefined}
        prefix={undefined}
      />
      <ProfileStat
        title="tier progress"
        value={`${total} / ${toNextTier}`}
        gap={5}
        style={fonts.activityValue}
        valueColor={total >= toNextTier ? colors.green : colors.white}
        postfix={undefined}
        prefix={undefined}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
  )
};