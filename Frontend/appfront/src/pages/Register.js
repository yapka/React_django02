import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // Assurez-vous que le chemin est correct
import Footer from "../components/Footer";

const Register = () => {
  // États pour les champs du formulaire
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    dateDeNaissance: "",
    lieuDeNaissance: "",
    nomDuPere: "",
    nomDeLaMere: "",
    numeroDePieceIdentite: "",
    dateExpirationPieceIdentite: "",
    file: null // Pour le fichier uploadé
  });

  // État pour les erreurs
  const [error, setError] = useState(null);
  
  // Hook pour la navigation
  const navigate = useNavigate();

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'file' ? files[0] : value
    }));
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Création d'un FormData pour inclure le fichier
    const formDataToSend = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      formDataToSend.append(key, value);
    }

    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        body: formDataToSend
      });

      if (response.ok) {
        navigate("/login");
      } else {
        const result = await response.json();
        setError(result.message || "Échec de l'inscription. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de l'inscription :", error);
      setError("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Inscription</h2>
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-600 border border-red-300 rounded">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex space-x-6">
              {/* Carte Informations Personnelles */}
              <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                <h3 className="text-xl font-semibold mb-4">Informations Personnelles</h3>
                
                {/* Nom */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="nom">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Prénom */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="prenom">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Date de naissance */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="dateDeNaissance">
                    Date de naissance
                  </label>
                  <input
                    type="date"
                    id="dateDeNaissance"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    value={formData.dateDeNaissance}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Lieu de naissance */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="lieuDeNaissance">
                    Lieu de naissance
                  </label>
                  <input
                    type="text"
                    id="lieuDeNaissance"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    value={formData.lieuDeNaissance}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Nom du père */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="nomDuPere">
                    Nom du père
                  </label>
                  <input
                    type="text"
                    id="nomDuPere"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    value={formData.nomDuPere}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Nom de la mère */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="nomDeLaMere">
                    Nom de la mère
                  </label>
                  <input
                    type="text"
                    id="nomDeLaMere"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    value={formData.nomDeLaMere}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Carte Informations d'Identité */}
              <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                <h3 className="text-xl font-semibold mb-4">Informations d'Identité</h3>

                {/* Numéro de pièce d'identité */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="numeroDePieceIdentite">
                    Numéro de pièce d'identité
                  </label>
                  <input
                    type="text"
                    id="numeroDePieceIdentite"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    value={formData.numeroDePieceIdentite}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Date de validité de la pièce d'identité */}
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2" htmlFor="dateExpirationPieceIdentite">
                    Date de validité de la pièce d'identité
                  </label>
                  <input
                    type="date"
                    id="dateExpirationPieceIdentite"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    value={formData.dateExpirationPieceIdentite}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Téléchargement de fichier */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="file">
                    Téléverser un fichier
                  </label>
                  <input
                    type="file"
                    id="file"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
