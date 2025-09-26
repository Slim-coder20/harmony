import { effetsProducts } from "@/data/effets";
import ProductCard from "@/components/ProductCard";

export default function Effet() {
  const labelByCategory = {
    effetbasse: "Effets-basse",
    effetguitare: "Effets-guitare",
    
    
  };

  const sections = ["effetbasse", "effetguitare"];

  return (
    <div className="min-h-screen p-8">
      {sections.map((cat) => {
        const items = effetsProducts.filter((p) => p.category === cat);
        if (items.length === 0) return null;
        return (
          <div key={cat} className="mb-12">
            <h2 className="text-2xl mb-4">{labelByCategory[cat]}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item) => (
                <ProductCard item={item} topVente={item.badge === "TOP VENTES"} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}