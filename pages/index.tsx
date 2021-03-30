import { useContext } from "react";
import Link from "next/link";

import AuthContext from "../context/AuthContext";
import { API_URL } from "../utils/urls";

export default function Home({ products }) {
  const { user, logoutUser, getToken } = useContext(AuthContext);

  return (
    <>
      <head>
        <title>Pollls</title>
      </head>

      <body>
        {!user && (
          <span>
            <Link href="login">Log In</Link>
          </span>
        )}

        {user && (
          <span>
            <Link href="account">Go To Account</Link>
          </span>
        )}
      </body>
    </>
  );
}

export async function getStaticProps() {
  const product_res = await fetch(`${API_URL}/products/`);
  const products = await product_res.json();

  return {
    props: {
      products,
    },
  };
}
