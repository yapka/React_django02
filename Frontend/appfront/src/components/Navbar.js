import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <header className="bg-primary text-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-3xl font-bold">TrustUpload</h1>
          <div className="flex space-x-4">
            <Link to="/login" className="px-4 py-2 bg-secondary hover:bg-secondary-dark rounded transition duration-300">Connexion</Link>
            <Link to="/register" className="px-4 py-2 bg-tertiary hover:bg-tertiary-dark rounded transition duration-300">Inscription</Link>
          </div>
        </nav>
      </header>
    );
};

export default Navbar;