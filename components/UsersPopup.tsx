import { View, Text, Image, Pressable, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";

import type { User } from "@/types/types";

import { popupViews } from "@/styles/popupViews";
import { assets } from "@/styles/assets";
import { popupFonts } from "@/styles/popupFonts";

type Props = {
  users: User[],
  onCreateNewUser(userName: string): void,
  onSelect(userData: User): void,
  onClose?(): void,
};

export default function UsersPopup({
  users,
  onCreateNewUser,
  onSelect,
  onClose,
}: Props) {

  const [isInputFieldShown, toggleInputField] = useState(false);
  const [userName, setUserName] = useState("");
  const [validationErrorMessage, setValidationErrorMessage] = useState("");

  const validateInput = () => {
    if (userName) {
      onCreateNewUser(userName);
      toggleInputField(false);
      setValidationErrorMessage("");
      setUserName("");
    } else {
      setValidationErrorMessage("name cannot be empty");
    }
  };

  useEffect(() => {
    if (!users.length) {
      setValidationErrorMessage("no users found");
    } else {
      setValidationErrorMessage("");
    }
  }, [users.length])

  return (
    <View style={popupViews.overlay}>
      <LinearGradient
        style={popupViews.container}
        colors={["#644994", "#1C0B3A"]}
        locations={[.25, .75]}
      >
        {
          (onClose !== undefined) && (
            <Pressable
              onPress={onClose}
              style={popupViews.close}>
              <Image
                source={require("@/assets/images/close.png")}
                style={assets.close}
              />
            </Pressable>
          )
        }
        <Text style={popupFonts.header}>
          Select user
        </Text>
        <View>
          <Pressable
            onPress={() => {
              setUserName("");
              toggleInputField(!isInputFieldShown);
            }}
          >
            <Text style={popupFonts.pressable}>
              + create new user
            </Text>
          </Pressable>
          {
            isInputFieldShown && (
              <View style={popupViews.prop}>
                <TextInput
                  placeholder="type in name here"
                  placeholderTextColor={"#FFFFFF"}
                  autoCorrect={false}
                  maxLength={16}
                  style={popupFonts.name}
                  value={userName}
                  onChangeText={text => {
                    if (!text) {
                      setValidationErrorMessage("name cannot be empty");
                    } else {
                      setValidationErrorMessage("");
                    }
                    setUserName(text);
                  }}
                />
                <Pressable
                  style={popupViews.textButton}
                  onPress={validateInput}
                >
                  <Text style={popupFonts.basic}>
                    create
                  </Text>
                </Pressable>
              </View>
            )
          }
          <Text style={popupFonts.error}>
            {validationErrorMessage}
          </Text>
          <View>
            {users.map((user) => (
              <Pressable
                key={user.id}
                style={popupViews.textButton}
                onPress={() => onSelect(user)}
              >
                <Text style={popupFonts.pressable}>
                  {user?.name!}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}