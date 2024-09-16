import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // Assurez-vous que le chemin est correct
import Footer from "../components/Footer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Pour afficher les erreurs
  const navigate = useNavigate(); // Pour naviguer après connexion

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Réinitialiser l'erreur avant de tenter la connexion
    setError(null);

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Si la connexion est réussie, on redirige vers le tableau de bord
        navigate("/dashboard");
      } else {
        // Extraire et afficher le message d'erreur
        const result = await response.json();
        setError(
          result.message ||
            "Échec de la connexion. Veuillez vérifier vos identifiants."
        );
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la tentative de connexion :", error);
      setError("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Connexion</h2>
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-600 border border-red-300 rounded">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="username">
                Nom d'utilisateur
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Connexion
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
