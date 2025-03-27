import { View, Text } from "react-native";

import AddPopupOption from "./AddPopupOption";
import AddPopupSuboption from "./AddPopupSuboption";

import { popupViews } from "@/styles/popupViews";
import { popupFonts } from "@/styles/popupFonts";
import { useState } from "react";

type Props = {
  title: string,
  options: {
    title: string,
    suboptions: string[],
  }[],
  onSelectValue(value: string): void,
};

export default function AddPopupProp({
  title,
  options,
  onSelectValue,
}: Props) {

  const emptySuboptions = {
    title: "",
    content: [""],
  };

  const [suboptionsToShow, setSuboptions] = useState(emptySuboptions);

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
              onToggleSuboptions={(title, suboptions) => title === suboptionsToShow.title ?
                setSuboptions(emptySuboptions) :
                setSuboptions({ title: title, content: suboptions })
              }
            />
          ))
        }
        {
          suboptionsToShow.content[0] && suboptionsToShow.content.map(suboption => (
            <AddPopupSuboption
              title={suboption}
            />
          ))
        }
      </View>
    </View>
  )
}