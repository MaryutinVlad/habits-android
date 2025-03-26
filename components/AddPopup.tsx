import { View, Text, Pressable, TextInput, Image } from "react-native";
import { useState } from "react";

import { containers } from "@/styles/containers";
import { assets } from "@/styles/assets";
import { fonts } from "@/styles/fonts";

type Props = {
  onClose(): void
};

export default function AddPopup({
  onClose
}: Props) {

  const [isCountableSelected, toggleCountableMenu] = useState(false);

  return (
    <View style={containers.overlay}>
      <View style={containers.addActivity}>
        <Pressable
          onPress={() => {
            toggleCountableMenu(false);
            onClose();
          }}
          style={containers.closingButton}>
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
          style={{
            ...fonts.activityName,
            textDecorationLine: "underline"
          }}
        />
        <View style={containers.addActivityOption}>
          <Text style={{
            ...fonts.activityName,
            ...fonts.addActivityPropName,
          }}>
            Type:
          </Text>
          <View style={containers.addActivityValues}>
            <Pressable
              style={{
                ...containers.optionItem,
              }}
              onPress={() => toggleCountableMenu(!isCountableSelected)}
            >
              <Text style={{
                ...fonts.activityName,
                textAlign: "right",
                textDecorationLine: isCountableSelected ? "underline" : "none",
                color: isCountableSelected ? "#2C9C24" : "#FFFFFF",
              }}>
                countable
              </Text>
            </Pressable>
            <Pressable
              style={{
                ...containers.optionItem,
              }}
            >
              <Text style={{
                ...fonts.activityName,
                textAlign: "center",
              }}>
                yes / no
              </Text>
            </Pressable>
            {
              isCountableSelected && (
                <>
                  <Text style={{
                    ...fonts.activityName,
                    ...containers.optionItem,
                    textAlign: "right",
                    lineHeight: 35,
                  }}>
                    value:
                  </Text>
                  <TextInput
                    style={{
                      ...fonts.activityName,
                      ...containers.optionItem,
                      textAlign: "center",
                      paddingLeft: 10,
                      lineHeight: 23,
                      textDecorationLine: "underline",
                    }}
                    defaultValue="0"
                  />
                </>
              )
            }
          </View>
        </View>
        <View style={containers.addActivityOption}>
          <Text style={{
            ...fonts.activityName,
            ...fonts.addActivityPropName,
          }}>
            Tiering:
          </Text>
          <View style={containers.addActivityValues}>
            <Pressable style={containers.optionItem}>
              <Text style={{
                ...fonts.activityName,
                textAlign: "right"
              }}>
                standard
              </Text>
            </Pressable>
            <Pressable style={containers.optionItem}>
              <Text style={{
                ...fonts.activityName,
                textAlign: "center"
              }}>
                custom
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}