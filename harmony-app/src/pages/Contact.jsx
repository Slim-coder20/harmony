import { useState } from "react";
import { Link } from "react-router-dom";
import HorizontalMenu from "../components/HorizontalMenu";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
    telephone: "",
  });

  const [errors, setErrors] = useState({});

  // Gestion des erreurs dans les inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Effacer l'erreur du champ quand l'utilisateur tape
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validation du formulaire
  const validateForm = () => {
    const newErrors = {};

    if (!formData.nom.trim()) newErrors.nom = "Le nom est requis";
    if (!formData.prenom.trim()) newErrors.prenom = "Le prénom est requis";

    // Vérification de la bonne syntaxe de l'email
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }

    if (!formData.telephone.trim()) {
      newErrors.telephone = "Le numéro de téléphone est requis";
    } else if (!/^\d{10}$/.test(formData.telephone.replace(/\s/g, ""))) {
      newErrors.telephone = "Le numéro de téléphone doit contenir 10 chiffres";
    }

    return newErrors;
  };

  // Soumettre le formulaire de contact
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log("Données du formulaire:", formData);
      alert(
        "Message envoyé avec succès ! (Front-end seulement pour le moment)"
      );
    } else {
      setErrors(newErrors);
      alert("Veuillez corriger les erreurs avant de soumettre votre message");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Menu de navigation  */}
      <HorizontalMenu />
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-5xl font-bold text-blue-900">
          CONTACTEZ-NOUS
        </h2>
        <p className="bg-blue-500 text-white p-5 text-center text-2xl font-bold mt-3 rounded-2xl ">
          01 32 45 68 74
        </p>
      </div>

      {/* Section pour les horaires */}
      <div className="mt-10 text-center">
        <div className="flex justify-center items-center space-x-10 text-lg font-medium">
          <div>
            <p className="font-bold">LUNDI - VENDREDI</p>
            <p>9h00 - 18h00</p>
          </div>
          {/* Trait vertical */}
          <div className="border-l border-gray-400 h-10"></div>
          <div>
            <p className="font-bold">SAMEDI</p>
            <p>10h00 - 18h00</p>
          </div>
        </div>
      </div>

      {/* Section pour les conseils produits */}
      <div className="mt-10 text-center">
        <h3 className="font-bold text-3xl">
          COMMANDE PAR TÉLÉPHONE, CONSEILS PRODUITS
        </h3>
        <p className="mt-2 text-gray-700 text-center text-2xl">
          Vous désirez passer une commande par téléphone, connaître la
          disponibilité d'un produit sur internet ou un conseil, contactez nos
          conseillers, ils sont tous musiciens ! Vous pouvez aussi nous écrire
          sur{" "}
          <a
            href="mailto:conseil@woodbrass.com"
            className="text-blue-500 underline"
          >
            conseil@woodbrass.com
          </a>
        </p>
      </div>

      {/* Formulaire de contact */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg mb-5"
        >
          <div className="mb-4">
            <label
              htmlFor="nom"
              className="block text-sm font-medium text-gray-700"
            >
              Nom
            </label>
            <input
              type="text"
              name="nom"
              id="nom"
              value={formData.nom}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.nom && <p className="text-red-500 text-sm">{errors.nom}</p>}
          </div>

          <div className="mb-4">
            <label
              htmlFor="prenom"
              className="block text-sm font-medium text-gray-700"
            >
              Prénom
            </label>
            <input
              type="text"
              name="prenom"
              id="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.prenom && (
              <p className="text-red-500 text-sm">{errors.prenom}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="telephone"
              className="block text-sm font-medium text-gray-700"
            >
              Téléphone
            </label>
            <input
              type="text"
              name="telephone"
              id="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.telephone && (
              <p className="text-red-500 text-sm">{errors.telephone}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
