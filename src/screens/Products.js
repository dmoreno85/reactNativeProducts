import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getProducts } from "../services";
export default function Products() {
  const [productList, setProductList] = useState([]);
//   console.log(productList);
  useEffect(() => {
    getProducts().then((res) => {
      setProductList(res.data);
    });
  }, []);
  return (
    <View>
      <Text>Products...</Text>
    </View>
  );
}
