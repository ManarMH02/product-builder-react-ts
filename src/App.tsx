import ProductCard from "./components/ProductCard";
import { productList } from "./data";

function App() {
  const renderProductList = productList.map(product =>
    <ProductCard
      key={product.id}
      product={product} />
  )
  return (
    <main className="container mx-auto">
      <div className="p-10 flex flex-col gap-3 md:flex-row md:gap-4">
      {renderProductList}

    </div>
    </main>
  );
}

export default App;
