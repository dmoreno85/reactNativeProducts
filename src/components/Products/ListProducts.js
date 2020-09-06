import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native-elements";
import { size } from "lodash";
import { useNavigation } from "@react-navigation/native";

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

function ProductsItem(props) {
  const { productData, navigation } = props;
  const { image, title, id, price } = productData.item;
  const imageProductList = image[0];

  const goProductDetail = () => {
    navigation.navigate("product", {
      id,
      title,
    });
  };
  return (
    <TouchableOpacity onPress={goProductDetail}>
      <View style={styles.viewProducts}>
        <View style={styles.viewProductsImage}>
          <Image
            resizeMode="contain"
            PlaceholderContent={<ActivityIndicator color="fff" />}
            source={
              imageProductList
                ? { uri: imageProductList }
                : require("../../../assets/no-image.png")
            }
            style={styles.imageProduct}
          />
        </View>
        <View style={styles.viewDetails}>
          <Text style={styles.titleProduct}>{title}</Text>
          <Text style={styles.priceProduct}>{price}€</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loaderProducts: {
    marginTop: 30,
    marginBottom: 10,
    alignItems: "center",
  },
  viewProducts: {
    flexDirection: "row",
    margin: 3,

    backgroundColor: "white",
    borderRadius: 5,
  },
  viewProductsImage: {
    marginRight: 15,
  },
  imageProduct: {
    width: 150,
    height: 150,
  },
  titleProduct: {
    fontWeight: "bold",
    fontSize: 21,
    marginBottom: 10,
    textTransform: "capitalize",
    fontFamily: "Roboto",
  },
  priceProduct: {
    fontStyle: "italic",
    fontFamily: "monospace",
  },
  viewDetails: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
