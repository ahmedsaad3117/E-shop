import CardGroup from "react-bootstrap/CardGroup";

import Card from "../../componant/Card/Card";
import productService from "../../services/productService";
import { calcTime } from "../../utils/calcTime";

import { useEffect, useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetechMoviesHandler() {
    try {
      setIsLoading(true);

      const response = await productService.getAllProductsApi();
      console.log(response);
      if (!response.statusText) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }

      setProducts(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    fetechMoviesHandler();
  }, []);

  return !isLoading ? (
    <CardGroup className="container">
      {products.slice(0, 4).map((product, key) => (
        <Card
          _id={product._id}
          name={product.name}
          description={product.description}
          numberOfReviews={product.numberOfReviews}
          overallRating={product.overallRating}
          image={product.image}
          listOfReviews={product.listOfReviews}
          updatedat={calcTime(product.updatedAt)}
          key={key}
        />
      ))}
    </CardGroup>
  ) : (
    <p>Loading...</p>
  );
};

export default Home;
