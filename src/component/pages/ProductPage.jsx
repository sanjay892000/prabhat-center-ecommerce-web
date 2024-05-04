import React, { useContext } from "react";
import { ShopContext } from "../mycontext/ShopContext";
import "./style/productpage.css";
import { useParams } from "react-router-dom";
import Breadcrum from "../breadcrum/Breadcrum";
import ProductDisplay from "../productdisplay/ProductDisplay";

function ProductPage() {
  const { all_product } = useContext(ShopContext);
  const productid = useParams();
  const product = all_product.find((e) => e.id === Number(productid.productid));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
}

export default ProductPage;
