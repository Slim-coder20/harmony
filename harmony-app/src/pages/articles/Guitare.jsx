import { Link } from "react-router-dom";

export default function Guitare() {
  // Variable //
  const guitarArticle = [
    {
      category: "Guitares éléctrique ",
      model: [
        {
          name: "Fender",
          description: "ST80 MA Sunburst",
          image: "guitares/ST80_Sunburst.jpg",
          price: 1500,
          monthly: "58",
          stock: ["Stock Internet", "Magasins Paris"],
        },
        {
          name: "Ibanez",
          description: "GIO GRX70QA-TRB",       
          image:"guitares/ibanez.webp",
          price: "780",
          monthly: 35,
          stock:["Stock Internet", "Magasins Paris"],
        },
        {
          name: "Harley Benton",
          description: "CST-24T",
          image: "guitares/harley-benton.webp",
          price: "670",
          monthly: "25",
          stock: ["Stock Internet", "Magasins Paris"],
        },
          
      ],
    },
    {
      category: "Guitares Accoustique",
      model: [
         {
          name: "Yamaha",
          description: "F310",
          image: "guitares/yamaha-f310.jpg",
          price: "650",
          monthly: "45",
          stock: ["Stock Internet", "Magasins Paris"],
        },
         {
          name: "Takamine",
          description: "SD25",
          image: "guitares/sd25.jpg",
          price: "670",
          monthly: "25",
          stock: ["Stock Internet", "Magasins Paris"],
        },
         {
          name: "Gisbson",
          description: "J-45 Standard",
          image: "guitares/gibson-accoustique.jpeg",
          price: "2600",
          monthly: "150",
          stock: ["Stock Internet", "Magasins Paris"],
        },
       
      ],
    },
    {
      category: "Guitares classique",
      model: [
       {
          name: "Silvanez",
          description: "CL44-NAT",
          image: "guitares/classique1.jpeg",
          price: "800",
          monthly: "90",
          stock: ["Stock Internet", "Magasins Paris"],
        },
       {
          name: "Yamaha",
          description: "CGS102",
          image: "guitares/classique2.jpg",
          price: "1200",
          monthly: "120",
          stock: ["Stock Internet", "Magasins Paris"],
        },
       {
          name: "Yamaha",
          description: "C40 Black",
          image: "guitares/classique3.jpg",
          price: "500",
          monthly: "55",
          stock: ["Stock Internet", "Magasins Paris"],
        },
      ],
    },
  ];
  return (
    <div className="min-h-screen p-8">
      {guitarArticle.map((category, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl  mb-4">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {category.model.map((item, idx) => (
              <div key={idx} className=" rounded-lg p-4 shadow-lg">
                <img
                  src={`/${item.image}`}
                  alt={item.name}
                  className="w-full h-50 object-contain mb-4"
                />
                <h3 className="text-xl">{item.name}</h3>
                <p className="text-gray-700">{item.description}</p>
                <div className=" flex items-center gap-2 mb-2">
                  <span className=" text-2xl font-bold">{item.price}€</span>
                  <h3 className=" font-semibold">
                    ou 
                    <span className="text-blue-600 font-bold text-lg">
                      {item.monthly}€ / mois
                    </span>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
