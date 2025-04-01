import { View, Text, Pressable, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";

import type { ActivityValues } from "@/types/types";

import AddPopupProp from "./AddPopupProp";

import { addPopupLayout, emptyValues } from "@/constants/addPopup";

import { popupViews } from "@/styles/popupViews";
import { assets } from "@/styles/assets";
import { popupFonts } from "@/styles/popupFonts";

type Props = {
  onAddActivity(selectedValues: ActivityValues): void,
  onClose(): void
};

export default function AddPopup({
  onAddActivity,
  onClose
}: Props) {

  const [activityName, setActivityName] = useState("");
  const [validationErrorMessage, setValidationErrorMessage] = useState("");
  const [selectedValues, setSelectedValues] = useState(emptyValues);

  const validateValues = (selectedValues: ActivityValues) => {

    let prop: keyof ActivityValues;

    if (!activityName) {
      setValidationErrorMessage("name cannot be empty");
      return;
    }

    for (prop in selectedValues) {

      const selectedProp = selectedValues[prop];

      if (!selectedProp.value) {

        setValidationErrorMessage(`${prop} field is not selected!`);
        return;
      }

      if (Object.hasOwn(selectedProp, "suboptions")) {

        const selectedSuboptions = selectedProp.suboptions;
        let minimalValue = 0;

        for (let suboption in selectedSuboptions) {

          if (selectedSuboptions[suboption] <= minimalValue && minimalValue !== 0) {

            setValidationErrorMessage(suboption === "value" ?
              "custom value can't be zero" :
              "next tier can be zero or greater than the next one");
            return;
          }

          minimalValue = selectedSuboptions[suboption];
        }
      }
    }
    onAddActivity(selectedValues);
  };

  const changeOptionValue = (propName: string, optionTitle: string) => {

    const updatedValues: ActivityValues = {
      ...selectedValues,
      [propName]: {
        ...selectedValues[propName],
        value: optionTitle,
      }
    };

    setSelectedValues(updatedValues);
    setValidationErrorMessage("");
  };

  const changeSuboptionValue = (propName: string, suboptionTitle: string, suboptionValue: string) => {
    
    const updatedValues: ActivityValues = {
      ...selectedValues,
      [propName]: {
        ...selectedValues[propName],
        suboptions: {
          ...selectedValues[propName].suboptions,
          [suboptionTitle]: Number(suboptionValue),
        }
      }
    }

    setSelectedValues(updatedValues);
    setValidationErrorMessage("");
  };

  return (
    <View style={popupViews.overlay}>
      <LinearGradient
        style={popupViews.container}
        colors={["#644994", "#1C0B3A"]}
        locations={[.25, .75]}
      >
        <Pressable
          onPress={() => {
            setSelectedValues(emptyValues);
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
        {
          validationErrorMessage && (
            <Text style={popupFonts.error}>
              {validationErrorMessage}
            </Text>
          )
        }
        <TextInput
          placeholder="type in name here"
          placeholderTextColor={"#FFFFFF"}
          autoCorrect={false}
          maxLength={16}
          style={popupFonts.name}
          value={activityName}
          onChangeText={text => {
            setValidationErrorMessage("");
            setActivityName(text);
          }}
        />
        {
          addPopupLayout.map(item => (
            <AddPopupProp
              key={item.title}
              title={item.title}
              options={item.options}
              onChangeOptionValue={(propName: string, optionTitle: string) => {
                changeOptionValue(propName, optionTitle);
                setValidationErrorMessage("");
              }}
              onChangeSuboptionValue={(suboptionTitle: string, suboptionValue: string) => {
                changeSuboptionValue(item.title, suboptionTitle, suboptionValue);
                setValidationErrorMessage("");
              }}
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
            <Pressable
              style={popupViews.option}
              onPress={() => validateValues(selectedValues)}
            >
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