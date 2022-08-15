import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
}
export const HeaderCustom: FunctionComponent<Props> = (props) => {
  const { title } = props;
  return (
    <View style={[styles.container]}>
      <Text style={styles.txtTitle}>{title}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: ScreenUtils.scale(10),
    marginTop: ScreenUtils.scale(40),
  },
  line: {
    borderBottomColor: Themes.colors.colGray10,
    borderWidth: 1,
  },
  txtTitle: {
    fontSize: 18,
    color: Themes.colors.textPrimary,
    // ...Themes.font.medium,
    lineHeight: 24,
    fontWeight: "700",
    textAlign: "center",
  },
});
