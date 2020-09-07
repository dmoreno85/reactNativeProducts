import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { size } from "lodash";
import { useNavigation } from "@react-navigation/native";
import ProductsItem from "./ProductItem";

export default function ListProducts(props) {
  const { productsList } = props;
  const navigation = useNavigation();
  const productListSort = productsList.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  return (
    <View>
      {size(productListSort) > 0 ? (
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{
            paddingTop: 3,
            paddingBottom: 3,
          }}
          data={productListSort}
          renderItem={(productData) => (
            <ProductsItem productData={productData} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.loaderProducts}>
          <ActivityIndicator size="large" />
          <Text>Cargando productos..</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loaderProducts: {
    marginTop: 30,
    marginBottom: 10,
    alignItems: "center",
  },
  priceProduct: {
    fontStyle: "italic",
    fontFamily: "monospace",
  },
});
