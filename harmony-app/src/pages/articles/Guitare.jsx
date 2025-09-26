import { Link } from "react-router-dom";
import { guitareProducts } from "@/data/guitares";
import ProductCard from "@/components/ProductCard";

export default function Guitare() {
  const labelByCategory = {
    electrique: "Guitares Électriques",
    acoustique: "Guitares Acoustiques",
    classique: "Guitares Classiques",
  };

  const sections = ["electrique", "acoustique", "classique"];

  return (
    <div className="min-h-screen p-8">
      {sections.map((cat) => {
        const items = guitareProducts.filter((p) => p.category === cat);
        if (items.length === 0) return null;
        return (
          <div key={cat} className="mb-12">
            <h2 className="text-2xl mb-4">{labelByCategory[cat]}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item) => (
                <ProductCard item={item} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
