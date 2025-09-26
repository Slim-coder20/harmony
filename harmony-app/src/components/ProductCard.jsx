import { Link } from "react-router-dom";

const ProductCard = (props) => {
    const { item, topVente } = props;
    return (
        <Link to={`/product/${item.id}`}>
            <div key={item.id} className="rounded-lg p-4 shadow-lg bg-white relative">
                {topVente &&
                    <span className=" absolute top-2 left-2 bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">
                        TOP VENTES
                    </span>
                }
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
        </Link>


    )
}
export default ProductCard;