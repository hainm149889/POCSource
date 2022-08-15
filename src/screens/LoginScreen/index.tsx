import { HeaderCustom, InputCustom } from "@components";
import { ScreenUtils } from "@helpers";
import { translate } from "@shared";
import { Themes } from "@themes";
import React from "react";
import { StyleSheet, View } from "react-native";

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderCustom title={translate("login")} />
      <View style={styles.mainContent}>
        <InputCustom titleLeft={translate("userName")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  mainContent: {
    paddingHorizontal: ScreenUtils.scale(10),
  },
  titlePage: {
    textAlign: "center",
  },
});
