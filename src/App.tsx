import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="p-10 grid gap-2 grid-cols-1 md:grid-cols-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default App;
