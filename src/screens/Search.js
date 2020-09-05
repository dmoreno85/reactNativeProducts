import React, { useEffect, useState } from "react";
import { StyleSheet,View, FlatList, Image,ScrollView } from "react-native";
import { SearchBar, ListItem, Icon, Tile } from "react-native-elements";
import { getProducts } from "../services";

export default function Search(props) {
  const { navigation } = props;
  const [search, setSearch] = useState("");
  const [productList, setProductList] = useState([]);
  const [productSearch, setProductSearch] = useState([]);

  useEffect(() => {
    if (search) {
      getProducts().then((res) => {
        setProductList(res.data);
      });
    } else setProductList([]);
  }, [search]);

  useEffect(() => {
    if (search) {
      const Search = search;
      let searchLowCase = Search.toLowerCase();
      const searchFiltered = productList.filter((item) => {
        return item.title.toLowerCase().match(searchLowCase);
      });
      setProductSearch(searchFiltered);
    } else {
      setProductSearch([]);
    }
  }, [search]);

  return (
    <ScrollView>
      <SearchBar
        placeholder="Busca tu restaurante..."
        onChangeText={(e) => setSearch(e)}
        value={search}
        containerStyle={styles.searchBar}
      />
      {productList.length === 0 ? (
        <NoProductFound />
      ) : (
        <FlatList
          data={productSearch}
          renderItem={(product) => (
            <Product product={product} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </ScrollView>
  );
}

function NoProductFound() {
  return (
    <View style={styles.noProductFound}>
      <Image
        source={require("../../assets/no-result-found.png")}
        resizeMode="cover"
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}

function Product(props) {
  const { product, navigation } = props;
  const { id, title, image } = product.item;
  return (
    <ListItem
      title={title}
      leftAvatar={{
        source: image[0]
          ? { uri: image[0] }
          : require("../../assets/no-image.png"),
      }}
      rightIcon={<Icon type="material-comunity" name="chevron-right" />}
      onPress={() =>
        navigation.navigate("products", {
          screen: "product",
          params: { id, title },
        })
      }
    />
  );
}

const styles = StyleSheet.create({
  searchBar: {
    marginBottom: 20,
  },
  noProductFound: {
    flex: 1,
    alignItems: "center",
  },
});
