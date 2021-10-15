import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product.js";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "$5",
    image: "",
  },
  {
    id: 2,
    name: "Macbbok",
    description: "mackbook shoes",
    price: "$50",
    image: "",
  },
];

const style = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default style;
