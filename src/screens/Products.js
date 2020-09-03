import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getProducts } from "../services";
import ListProducts from "../components/Products/ListProducts";

export default function Products(props) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProductList(res.data);
    });
  }, []);

  return (
    <View>
      <ListProducts productsList={productList} />
    </View>
  );
}
