import { SCREENS } from "@configs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, LoginScreen } from "@screens";
import React from "react";

export type RootStackParamList = {
  [SCREENS.LOGIN]: undefined;
  [SCREENS.HOME]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={SCREENS.LOGIN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
      <RootStack.Screen name={SCREENS.HOME} component={HomeScreen} />
    </RootStack.Navigator>
  );
};
