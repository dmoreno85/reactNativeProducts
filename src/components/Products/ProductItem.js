import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,ActivityIndicator } from 'react-native'
import { Image } from "react-native-elements";

export default function ProductsItem(props) {
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
    viewProducts: {
        flexDirection: "row",
        margin: 3,
        backgroundColor: "white",
        borderRadius: 5,
      }, viewProductsImage: {
        marginRight: 15,
      }, 
      imageProduct: {
        width: 140,
        height: 140,
      }, viewDetails: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
      }, titleProduct: {
        fontWeight: "bold",
        fontSize: 21,
        marginBottom: 10,
        textTransform: "capitalize",
        fontFamily: "Roboto",
      },
}) 