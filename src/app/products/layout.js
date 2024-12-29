import React from 'react';

const ProductsLayout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Our Products</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>Products Layout Footer</p>
      </footer>
    </div>
  );
};

export default ProductsLayout;