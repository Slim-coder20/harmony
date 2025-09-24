import HorizontalMenu from "@/components/HorizontalMenu";

export default function HarmonyStore() {
  const stores = [
    {
      title: "GUITARES & BASSES",
      image: "home/boutique1.jpeg",
    },
    {
      title: "BATTERIES & PERCUSSIONS",
      image: "home/boutique2.webp",
    },
    {
      title: "CLAVERS & HOME STUDIO",
      image: "home/boutique3.avif",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Menu de navigation */}
      <HorizontalMenu />
      <div className=" bg-gray-100 p-20 relative">
        <h1 className=" text-8xl text-center font-bold">
          LES MAGASINS HARMONY MUSIC À PARIS
        </h1>
      </div>
      {/* Section des images  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-8">
        {stores.map((store, index) => (
          <div
            key={index}
            className=" relative group overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <img
              src={store.image}
              alt={store.title}
              className="w-full h-full object-cover opacity "
            />
            <div className=" absolute inset-0  flex flex-col justify-end ml-2">
              <h2 className=" text-white text-3xl font-bold m">
                {store.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
      {/* Section Horraires et accès  */}
      <div className="flex justify-center items-center space-x-10 text-lg font-medium p-14">
        <div>
          <p className="font-bold text-3xl">LUNDI - VENDREDI</p>
          <p>9h00 - 18h00</p>
        </div>
        {/* Trait vertical */}
        <div className="border-l border-blue-800 h-20 w-20"></div>
        <div>
          <p className="font-bold text-3xl">SAMEDI</p>
          <p>10h00 - 18h00</p>
        </div>
      </div>
    </div>
  );
}
