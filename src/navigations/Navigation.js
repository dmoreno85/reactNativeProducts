import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProductsStack  from './ProductsStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
         name="products"
         component={ProductsStack}
         options={{title:"Productos"}}
         />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
