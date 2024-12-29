import React from "react";
import Link from "next/link";
import { MongoClient, ObjectId } from "mongodb";

// async function getProduct(id) {
//   const res = await fetch(`http://localhost:3000/api/products/${id}`);
//   return res.json();
// }

async function getProduct(id) {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db("products");
  const product = await db.collection("inventory").findOne({ _id: new ObjectId(id) });
  client.close();
  return product;
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

export async function generateStaticParams() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db("products");
  const products = await db.collection("inventory").find({}).toArray();
  client.close();

  return products.map((product) => ({
    id: product._id.toString(),
  }));
}