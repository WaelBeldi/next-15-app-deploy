import React from "react";
import Link from "next/link";

async function getProduct(id) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  return res.json();
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    return <p>Product not found</p>;
  }

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