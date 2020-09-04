import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Image } from "react-native-elements";
import { size } from "lodash";
import { useNavigation } from "@react-navigation/native";

export default function ListProducts(props) {
  const { productsList } = props;
  const navigation = useNavigation();

  return (
    <ScrollView>
      {size(productsList) > 0 ? (
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{
            paddingTop: 40,
            paddingBottom:40
          }}
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
    </ScrollView>
  );
}

function ProductsItem(props) {
  const { productData, navigation } = props;
  const { image, title, id } = productData.item;

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
            resizeMode="cover"
            PlaceholderContent={<ActivityIndicator color="fff" />}
            source={
              imageProductList
                ? { uri: imageProductList }
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
    fontSize: 25,
  },
});
