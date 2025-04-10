import { View, Text, Pressable, TextInput, Image } from "react-native";
import { useState } from "react";

import { LinearGradient } from "expo-linear-gradient";
import { useAssets } from "expo-asset";

import type { ActivityValues, Suboptions } from "@/types/types";

import AddPopupProp from "./AddPopupProp";

import { layout, emptyValues, gallery } from "@/constants/addPopup";

import { popupViews } from "@/styles/popupViews";
import { assets } from "@/styles/assets";
import { popupFonts } from "@/styles/popupFonts";

type Props = {
  onAddActivity(selectedValues: ActivityValues, portraitIndex: number, activityName: string): void,
  onClose(): void
};

export default function AddPopup({
  onAddActivity,
  onClose
}: Props) {

  const [activityName, setActivityName] = useState("");
  const [validationErrorMessage, setValidationErrorMessage] = useState("");
  const [selectedValues, setSelectedValues] = useState(emptyValues);
  const [portraits, error] = useAssets(gallery);
  const [selectedPortrait, setSelectedPortrait] = useState(portraits ? portraits[0] : gallery[0]);
  const [isGalleryShown, toggleGallery] = useState(false);
  const [portraitIndex, setPortraitIndex] = useState(0); //later it descends from db portrait index row

  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

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

      if (selectedValues[prop].suboptions) {

        const selectedSuboptions = getProperty(selectedProp, "suboptions");
        let minimalValue = 0;

        let suboption;

        for (suboption in selectedSuboptions) {

          const suboptionProp = getProperty(selectedSuboptions, suboption);

          if ((suboptionProp <= minimalValue) && minimalValue !== 0) {

            setValidationErrorMessage(suboption === "value" ?
              "custom value can't be zero" :
              "next tier can't be lesser than the previous one");
            return;
          }

          minimalValue = getProperty(selectedSuboptions, suboption);
        }
      }
    }
    
    onAddActivity(
      selectedValues,
      portraitIndex,
      activityName,
    );
  };

  const changeOptionValue = (propName: keyof ActivityValues, optionTitle: string) => {

    const updatedValues: ActivityValues = {
      ...selectedValues,
      [propName]: {
        suboptions: getProperty(selectedValues[propName], "suboptions"),
        value: optionTitle,
      }
    };

    setSelectedValues(updatedValues);
    setValidationErrorMessage("");
  };

  const changeSuboptionValue = (
    propName: keyof ActivityValues,
    suboptionTitle: keyof Suboptions,
    suboptionValue: string) => {

    const updatedValues: ActivityValues = {
      ...selectedValues,
      [propName]: {
        ...selectedValues[propName],
        suboptions: {
          ...selectedValues[propName].suboptions,
          [suboptionTitle]: Number(suboptionValue),
        }
      }
    };

    setSelectedValues(updatedValues);
    setValidationErrorMessage("");
  };

  const selectPortrait = (index: number) => {
    setPortraitIndex(index);
    setSelectedPortrait(portraits ? portraits[index] : gallery[0]);
    toggleGallery(false);
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
            toggleGallery(false);
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
            if (!text) {
              setValidationErrorMessage("name cannot be empty");
            } else {
              setValidationErrorMessage("");
            }
            setActivityName(text);
          }}
        />
        {
          layout.map((item) => (
            <AddPopupProp
              key={item.title}
              title={item.title}
              options={item.options}
              colored={item.colored}
              onChangeOptionValue={(propName: keyof ActivityValues, optionTitle: string) => {
                changeOptionValue(propName, optionTitle);
                setValidationErrorMessage("");
              }}
              onChangeSuboptionValue={(suboptionTitle: keyof Suboptions, suboptionValue: string) => {
                changeSuboptionValue(item.title, suboptionTitle, suboptionValue);
                setValidationErrorMessage("");
              }}
            />
          ))
        }
        {
          isGalleryShown ? (
            <View style={popupViews.gallery}>
              {
                portraits?.map((portrait, index) => (
                  <Pressable
                    key={`portrait${index}`}
                    style={popupViews.portrait}
                    onPress={() => selectPortrait(index)}
                  >
                    <Image
                      style={assets.addPortrait}
                      source={portrait ? portrait : gallery[0]}
                      alt="portrait"
                    />
                  </Pressable>
                ))
              }
            </View>
          ) : (
            <View style={popupViews.prop}>
              <Text style={popupFonts.basic}>
                Portrait:
              </Text>
              <View style={popupViews.options}>
                <Pressable
                  style={popupViews.option}
                  onPress={() => toggleGallery(true)}
                >
                  <Image
                    style={assets.addPortrait}
                    source={portraits ? selectedPortrait : gallery[0]}
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
                    alt="submit"
                  />
                </Pressable>
              </View>
            </View>
          )
        }
      </LinearGradient>
    </View>
  )
}