import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { FunctionComponent } from "react";
import { Themes } from "@themes";

interface Props {
  titleLeft?: string;
}
export const InputCustom: FunctionComponent<Props> = (props) => {
  const { titleLeft } = props;
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.titleLeft}>{titleLeft}</Text>
      <TextInput />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
  },
  titleLeft: {
    fontSize: 16,
    fontWeight: "400",
    color: Themes.colors.textPrimary,
    lineHeight: 18,
  },
});
