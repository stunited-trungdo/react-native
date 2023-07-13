import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";

import ActivityScreen from "./screens/ActivityScreen";
import ContractScreen from "./screens/ContractScreen";
import DetailScreen from "./screens/DetailScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

const StackNavigation: FC = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: "#fff",
              borderWidth: 0,
            },
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" size={26} color={color} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="ActivityStack"
          component={ActivityScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <AntDesign name="bars" size={26} color={color} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="ContractStack"
          component={ContractScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <AntDesign name="contacts" size={24} color={color} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={26} color={color} />
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
