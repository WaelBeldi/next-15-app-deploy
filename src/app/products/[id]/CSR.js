"use client";

import React from "react";
import Link from "next/link";

export default function ProductPage({ params }) {
  const [product, setProduct] = React.useState({});

  const { id } = React.use(params);

  React.useEffect(() => {
    fetch("/api/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="product-details-content">
      <h2>{product.name}</h2>
      <p className="product-details-description">{product.description}</p>
      <p className="product-details-price">Quantity: {product.quantity}</p>
      <Link href="/products">
        <button>Go Back</button>
      </Link>
    </div>
  );
}