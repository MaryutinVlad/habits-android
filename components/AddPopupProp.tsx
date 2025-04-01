import { View, Text } from "react-native";
import { useState } from "react";

import AddPopupOption from "./AddPopupOption";
import AddPopupSuboption from "./AddPopupSuboption";

import { tierColors } from "@/constants/styles";
import { emptySuboptions } from "@/constants/addPopup";

import { popupViews } from "@/styles/popupViews";
import { popupFonts } from "@/styles/popupFonts";

type Props = {
  title: string,
  options: {
    title: string,
    suboptions: string[],
    colored: boolean,
  }[],
  onChangeOptionValue(propName: string, optionName: string): void,
  onChangeSuboptionValue(suboptionTitle: string, suoptionValue: string): void,
};

export default function AddPopupProp({
  title,
  options,
  onChangeOptionValue,
  onChangeSuboptionValue,
}: Props) {

  const [suboptionsToShow, setSuboptions] = useState(emptySuboptions);
  const [currentlySelected, setCurrentlySelected] = useState("");

  const selectProp = (optionTitle: string, suboptions: string[], colored: boolean) => {

    if (currentlySelected === optionTitle) {

      setCurrentlySelected("");
      onChangeOptionValue(title, "");
      setSuboptions(emptySuboptions);

    } else {

      onChangeOptionValue(title, optionTitle);
      setCurrentlySelected(optionTitle);
      setSuboptions({ title: optionTitle, content: suboptions, colored: colored });
    }
  };

  return (
    <View style={popupViews.prop}>
      <Text style={popupFonts.capitalized}>
        {title}
      </Text>
      <View style={popupViews.options}>
        {
          options.map(option => (
            <AddPopupOption
              key={`${title}-${option.title}`}
              title={option.title}
              suboptions={option.suboptions}
              colored={option.colored}
              onSelect={(title, suboptions, colored) => selectProp(title, suboptions, colored)}
              currentlySelected={currentlySelected}
            />
          ))
        }
        {
          suboptionsToShow.content[0] && suboptionsToShow.content.map((suboption, index) => (
            <AddPopupSuboption
              key={`${title}-${suboption}`}
              index={index}
              color={suboptionsToShow.colored ? tierColors[index] : "#FFFFFF"}
              title={suboption}
              onChangeSuboptionValue={(suboptionTitle, value) => onChangeSuboptionValue(suboptionTitle, value)}
            />
          ))
        }
      </View>
    </View>
  )
}