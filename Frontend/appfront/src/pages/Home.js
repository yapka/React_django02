import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
     
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <section className="text-center mb-12 max-w-2xl">
          <h2 className="text-4xl font-bold text-primary mb-4">Bienvenue sur TrustUpload</h2>
          <p className="text-lg text-gray-700 mb-6">
            TrustUpload est une plateforme conçue pour vous aider à gérer vos tâches plus efficacement. Nous intégrons un système de validation d'inscription innovant qui simplifie et sécurise le processus d'enregistrement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/login" className="bg-primary text-white px-6 py-3 rounded shadow-lg hover:bg-primary-dark transition duration-300">Connexion</Link>
            <Link to="/register" className="bg-tertiary text-white px-6 py-3 rounded shadow-lg hover:bg-tertiary-dark transition duration-300">Inscription</Link>
          </div>
        </section>
        
        {/* À propos du projet */}
        <section className="bg-white py-12 px-6 shadow-md rounded-lg">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-semibold text-primary mb-4">À propos du projet</h3>
            <p className="text-lg text-gray-600">
              TrustUpload est le projet de notre bootcamp, conçu pour révolutionner la gestion des inscriptions en ligne.
            </p>
          </div>
        </section>

        {/* Notre équipe */}
        <section className="py-12 px-6">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-semibold text-primary mb-4">Notre équipe</h3>
            <p className="text-lg text-gray-600 mb-6">
              Notre équipe se compose de personnes passionnées, dédiées à créer la meilleure expérience pour nos utilisateurs. Découvrez les personnes derrière TrustUpload.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {/* Carte de membre d'équipe avec photo */}
              <div className="bg-white p-6 rounded-lg shadow-lg w-60 max-w-xs">
                <img src="url-de-la-photo-de-ouattara" alt="Ouattara Mohamed" className="w-24 h-24 rounded-full mx-auto mb-4"/>
                <h4 className="text-xl font-semibold text-primary mb-2">Ouattara Mohamed</h4>
                <p className="text-gray-600">Chef d'équipe</p>
              </div>

              {/* Carte de membre d'équipe avec photo */}
              <div className="bg-white p-6 rounded-lg shadow-lg w-60 max-w-xs">
                <img src="./logo.svg" alt="Delovie Kouassi" className="w-24 h-24 rounded-full mx-auto mb-4"/>
                <h4 className="text-xl font-semibold text-primary mb-2">Delovie Kouassi</h4>
                <p className="text-gray-600">Designer UI/UX</p>
              </div>

              {/* Carte de membre d'équipe avec photo */}
              <div className="bg-white p-6 rounded-lg shadow-lg w-60 max-w-xs">
                <img src="url-de-la-photo-de-nathanael" alt="Nathanael K" className="w-24 h-24 rounded-full mx-auto mb-4"/>
                <h4 className="text-xl font-semibold text-primary mb-2">Nathanael K</h4>
                <p className="text-gray-600">Designer UI/UX</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
     
      <Footer />
    </div>
  );
};

export default Home;
