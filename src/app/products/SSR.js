import Link from "next/link";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  return res.json();
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
