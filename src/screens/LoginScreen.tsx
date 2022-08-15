import {ScreenUtils} from '@helpers';
import { Themes } from '@themes';
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <TextInput />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
    paddingHorizontal: ScreenUtils.scale(10),
  },
});
