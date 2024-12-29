import { MongoClient } from "mongodb";
import Link from "next/link";

// async function getProducts() {
//   const res = await fetch("http://localhost:3000/api/products");
//   return res.json();
// }

async function getProducts() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db("products");
  const products = await db.collection("inventory").find({}).toArray();
  client.close();
  return products;
}

export default async function ProductsPage() {
  const products = await getProducts();

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

// This function is called at build time
// Used to generate the static paths for the products.
// This function fetches the products and returns an array of objects
//   with the params key, which contains the id of each product.
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product._id.toString(),
  }));
}
