import axios from "axios";

export const getProducts = async () => {
  try {
    const res = await axios.get("http://localhost:3005/products");
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getProductsById = async (id) => {
  try {
      const res = await axios.get(`http://localhost:3005/products/${id}`);
     
      return res;
  } catch (error) {
      console.log(error);
  }
};