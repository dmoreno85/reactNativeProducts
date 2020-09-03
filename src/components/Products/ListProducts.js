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

export default function ListProducts(props) {
  const { productsList } = props;
console.log(productsList);
  return (
    <View>
      {size(productsList) > 0 ? (
        <FlatList 
        data={productsList}
        renderItem={(productData) => <ProductsItem productData={productData}/>}
        keyExtractor={(item,index)=>index.toString()}
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
  const { productData } = props;
  const {image,title}=productData.item;
const goProductDetail = () =>{
    console.log('OK');
}
  return (
 <TouchableOpacity onPress={goProductDetail}>
<View style={styles.viewProducts}>
    <View style={styles.viewProductsImage}>
        <Image
        resizeMode="cover"
        PlaceholderContent={<ActivityIndicator color ='fff'/>}
        source={
image ? {uri:image} : require("../../../assets/Interrogation.jpg")
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
  viewProducts:{
      flexDirection:"row",
      margin:1
  },
  viewProductsImage:{
     marginRight: 15
  },
  imageProduct:{
      width:150,
      height:150,
  },
  titleProduct:{
      fontWeight:"bold",
      fontSize:50
  }
});