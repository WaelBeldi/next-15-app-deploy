"use client";

import Link from "next/link";
import React from "react";

export default function ProductsPage() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-quantity">Quantity: {product.quantity}</p>
          <Link href={`/products/${product._id}`}>
            <p>View Details</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
