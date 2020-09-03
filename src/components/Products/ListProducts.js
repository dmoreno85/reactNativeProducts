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

  return (
    <View>
      {size(productsList) > 0 ? (
        <FlatList
          data={productsList}
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
  const { image, title, id } = productData.item;
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
            resizeMode="cover"
            PlaceholderContent={<ActivityIndicator color="fff" />}
            source={
              image
                ? { uri: image }
                : require("../../../assets/Interrogation.jpg")
            }
            style={styles.imageProduct}
          />
        </View>
        <Text style={styles.titleProduct}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loaderProducts: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  viewProducts: {
    flexDirection: "row",
    margin: 1,
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
    fontSize: 50,
  },
});
