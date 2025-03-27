import { View, TextInput, Text } from "react-native";

type Props = {
  suboptions: string[],
};

export default function AddPopupSuboptions({
  suboptions,
} : Props) {
  return (
    <View>
      <Text>
        value:
      </Text>
      <TextInput
        defaultValue="0"
      />
    </View>
  )
}