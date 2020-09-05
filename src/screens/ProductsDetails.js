import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { getProductsById } from "../services";
import Loading from "../components/Loading";
import Carousel from "../components/ImagesCarousel";

const screenWidht = Dimensions.get("window").width;

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

  if (!product) return <Loading isVisible={true} text="cargando.." />;

  return (
    <ScrollView vertical style={styles.viewBody}>
      <Carousel arrayImages={product.image} height={200} width={screenWidht} />
      <TitleProduct
        title={product.title}
        description={product.description}
        model={product.model}
      />
    </ScrollView>
  );
}

function TitleProduct(props) {
  const { title, description, model } = props;

  return (
    <View style={styles.viewTitleProduct}>
      <View style={styles.viewTitleContainer}>
        <Text style={styles.titleProduct}>{title}</Text>
      </View>
      <Text style={styles.modelProduct}>{model}</Text>
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
    fontSize: 30,
    fontWeight: "bold",
  },
  descriptionProduct: {
    marginTop: 6,
    color: "grey",
  },
  modelProduct: {
    marginTop: 6,
    fontSize: 15,
    fontStyle: "italic",
  },
  viewTitleContainer: {
    alignItems: "center",
  },
});
