import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { getProductsById } from "../services";
import Loading from "../components/Loading";
import Carousel from "../components/ImagesCarousel";

const screenWidht = Dimensions.get("window").width;

export default function ProductsDetails(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductsById(id).then((res) => {
      setProduct(res.data);
    });
  }, []);

  if (!product) return <Loading isVisible={true} text="cargando.." />;

  return (
    <ScrollView vertical style={styles.viewBody}>
      <Carousel arrayImages={product.image} height={200} width={screenWidht} />
      <TitleProduct data={product} />
    </ScrollView>
  );
}

function TitleProduct(props) {
  const { title, description, model, price, stock } = props.data;
  console.log(props);
  return (
    <View style={styles.viewTitleProduct}>
      <View style={styles.viewTitleContainer}>
        <Text style={styles.titleProduct}>{title}</Text>
      </View>
      <Text style={styles.modelProduct}>{model}</Text>

      <View style={styles.viewPriceContainet}>
        <View style={styles.textStyleContainer}>
          <Text style={styles.boldStyle}>Precio: </Text>
          <Text style={styles.textPrice}> {price} </Text>
          <Text style={styles.boldStyle}>€</Text>
        </View>
        <View style={styles.textStyleContainer}>
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
    marginTop: 6,
    marginBottom: 36,
    fontSize: 17,
    fontStyle: "italic",
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#635c5c",
  },
  viewTitleContainer: {
    alignItems: "center",
  },
  viewPriceContainet: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 36,
  },
  textStyleContainer: {
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
});
