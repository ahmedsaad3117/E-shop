import http from "../utils/http";

const getAllProductsApi = () => {
  return http.get(`/products`);
};

const addReviewApi = (id, data) => {
  return http.post(`/review/product/${id}`, data);
};

const productService = {
  getAllProductsApi,
  addReviewApi,
};

export default productService;
