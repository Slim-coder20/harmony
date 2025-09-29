import { Link } from "react-router-dom";

const ProductCard = (props) => {
    const { item, topVente } = props;
    return (
        <Link to={`/product/${item.id}`}>
            <div key={item.id} className="rounded-lg p-3 md:p-4 shadow-lg bg-white relative">
                {topVente &&
                    <span className=" absolute top-2 left-2 bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[10px] md:text-xs font-bold">
                        TOP VENTES
                    </span>
                }
                <img
                    src={item.image}
                    alt={`${item.brand} ${item.model}`}
                    className="w-full h-32 sm:h-36 md:h-48 object-contain mb-3 md:mb-4"
                />
                <h3 className="text-base md:text-lg font-semibold">{item.brand}</h3>
                <p className="text-gray-700 text-xs md:text-sm mb-2">{item.model}</p>
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl md:text-2xl font-bold">{item.price}€</span>
                    <span className="text-xs md:text-sm">
                        ou <span className="text-blue-600 font-bold">{item.monthly}€ / mois</span>
                    </span>
                </div>
                <button className="w-full h-8 md:h-10 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold md:font-bold text-xs md:text-base cursor-pointer">
                    Ajouter au panier
                </button>
            </div>
        </Link>


    )
}
export default ProductCard;