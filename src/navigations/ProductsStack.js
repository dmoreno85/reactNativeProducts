import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Products from "../screens/Products";
import ProductsDetails from "../screens/ProductsDetails";

const Stack = createStackNavigator();

export default function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="products"
        component={Products}
        options={{
          title: "Productos",
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
      <Stack.Screen
        name="product"
        component={ProductsDetails}
        options={{
          title: "Detalle de Producto",
          headerStyle: {
            backgroundColor: "#81d3a0",
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "monospace",
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}
