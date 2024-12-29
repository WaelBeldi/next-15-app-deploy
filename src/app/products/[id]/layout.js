export default function ProductLayout({ children }) {
  return (
    <>
      <>
        <header>
          <h1>Product Details</h1>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>Product Details Layout Footer</p>
        </footer>
      </>
    </>
  );
}