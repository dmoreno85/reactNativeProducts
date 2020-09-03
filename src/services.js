import axios from "axios";

export const getProducts = async () => {
  try {
    const res = await axios.get("http://localhost:3005/products");
    return res;
  } catch (error) {
    console.log(error);
  }
};
