import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { getProductsById } from "../services";
import { Rating } from "react-native-elements";
import Carousel from "../components/ImagesCarousel";

const screenWidht = Dimensions.get("window").width;

export default function ProductsDetails(props) {
  const { route } = props;
  const { id } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductsById(id).then((res) => {
      setProduct(res.data);
    });
  }, []);

  if (!product)
    return (
      <View style={styles.loaderProducts}>
        <ActivityIndicator size="large" />
        <Text>Cargando producto..</Text>
      </View>
    );

  return (
    <ScrollView vertical style={styles.viewBody}>
      <Carousel arrayImages={product.image} height={200} width={screenWidht} />
      <TitleProduct data={product} />
    </ScrollView>
  );
}

function TitleProduct(props) {
  const { title, description, model, price, stock, rating } = props.data;
  return (
    <View style={styles.viewTitleProduct}>
      <View style={styles.viewTitleContainer}>
        <Text style={styles.titleProduct}>{title}</Text>
      </View>
      <View style={styles.viewRatingContainer}>
        <Text style={styles.modelProduct}>{model}</Text>
        <Rating
          imageSize={20}
          style={styles.rating}
          readonly
          startingValue={rating}
        />
      </View>
      <View style={styles.viewPriceContainet}>
        <View style={styles.textStyleContainerPrice}>
          <Text style={styles.boldStyle}>Precio: </Text>
          <Text style={styles.textPrice}>{price}€</Text>
        </View>
        <View style={styles.textStyleContainerStock}>
          <Text style={styles.boldStyle}>En stock: </Text>
          <Text style={styles.textStock}>{stock} </Text>
          <Text style={styles.boldStyle}>unidades</Text>
        </View>
      </View>
      <Text style={styles.descriptionProduct}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewTitleProduct: {
    padding: 15,
  },
  titleProduct: {
    flex: 1,
    height: "auto",
    fontSize: 30,
    fontWeight: "bold",
    flexDirection: "column",
    justifyContent: "space-around",
    textTransform: "capitalize",
    fontFamily: "Roboto",
  },
  descriptionProduct: {
    marginTop: 6,
    color: "#635c5c",
    fontFamily: "Roboto",
    fontSize: 19,
  },
  modelProduct: {
    fontSize: 17,
    fontStyle: "italic",
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#635c5c",
    textTransform: "capitalize",
  },
  viewTitleContainer: {
    alignItems: "center",
  },
  viewPriceContainet: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  textStyleContainerStock: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  textStyleContainerPrice: {
    flex: 1,
    flexDirection: "row",
  },
  boldStyle: {
    fontWeight: "bold",
  },
  textStock: {
    fontSize: 15,
    fontStyle: "italic",
    color: "green",
    fontWeight: "bold",
  },
  textPrice: {
    fontStyle: "italic",
    fontSize: 15,
    fontWeight: "bold",
    color: "green",
    fontFamily: "monospace",
  },
  loaderProducts: {
    marginTop: 30,
    marginBottom: 10,
    alignItems: "center",
  },
  viewRatingContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 25,
  },
});
