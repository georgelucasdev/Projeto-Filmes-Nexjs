import axios from "axios";
import { useRouter } from "next/router";

function ProductPage({ posts }) {
  const router = useRouter();


  return (
    <>
      <div>
        <p>Name: {product.name}</p>
        <p>Description: {product.description}</p>
        <p>Price: {product.price}</p>
      </div>
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { 
    name: movie
   } = await axios.get(
    "http://localhost:3000/api/movies/" + query.name
  );

  console.log(product)

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;