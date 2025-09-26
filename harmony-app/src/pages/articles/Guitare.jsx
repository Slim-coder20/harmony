import { Link } from "react-router-dom";
import { guitareProducts } from "@/data/guitares";

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
                <div key={item.id} className="rounded-lg p-4 shadow-lg bg-white">
                  <img
                    src={item.image}
                    alt={`${item.brand} ${item.model}`}
                    className="w-full h-40 md:h-48 object-contain mb-4"
                  />
                  <h3 className="text-lg font-semibold">{item.brand}</h3>
                  <p className="text-gray-700 text-sm mb-2">{item.model}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold">{item.price}€</span>
                    <span className="text-sm">
                      ou <span className="text-blue-600 font-bold">{item.monthly}€ / mois</span>
                    </span>
                  </div>
                  <button className="bg-blue-500 p-3 rounded text-white font-bold cursor-pointer hover:bg-blue-800">
                    Ajouter au panier
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
