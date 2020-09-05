import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../screens/Search";

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="search"
        component={Search}
        options={{
          title: "Buscador",
          headerStyle: {
            backgroundColor: "#81d3a0",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "monospace",
            fontSize: 25,
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
