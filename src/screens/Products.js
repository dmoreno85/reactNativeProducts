import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { getProducts } from "../services";
import ListProducts from "../components/Products/ListProducts";

export default function Products() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProductList(res.data);
    });
  }, []);

  return (
    <ScrollView>
      <ListProducts productsList={productList} />
    </ScrollView>
  );
}
