import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Products from '../screens/Products';
import ProductsDetails from '../screens/ProductsDetails';

const Stack = createStackNavigator();

export default function ProductsStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="products"
            component={Products}
            options={{title:"Productos"}}
            />
            <Stack.Screen
            name="productDetail"
            component={ProductsDetails}
            options={{title:"Nombre de producto"}}
            />
        </Stack.Navigator>
    )
}