import { API_URL } from "../../utils/urls";

const Product = ({ product }) => {
  return <div></div>;
};

export async function getStaticProps({ params: { slug } }) {
  const product_res = await fetch(`${API_URL}/products/?slug=${slug}`);
  const found = await product_res.json();

  return {
    props: {
      product: found[0],
    },
  };
}

export async function getStaticPaths() {
  // Get external data from the file system, API, DB, etc.
  const products_res = await fetch(`${API_URL}/products`);
  const products = await products_res.json();
  return {
    paths: products.map((el) => ({
      params: { slug: String(el.slug) },
    })),
    fallback: false,
  };
}

export default Product;
