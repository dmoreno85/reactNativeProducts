import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getProductsById } from "../services";
import Loading from '../components/Loading';

export default function ProductsDetails(props) {
  const { navigation, route } = props;
  const { id, title } = route.params;
  const [product, setProduct] = useState(null);

  navigation.setOptions({ title: title });

  useEffect(() => {
    getProductsById(id).then((res) => {
      setProduct(res.data);
    });
  }, []);
if(product)return <Loading isVisible={true} text="cargando.."/>

  return (
    <View>
      <Text>heeeey</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
