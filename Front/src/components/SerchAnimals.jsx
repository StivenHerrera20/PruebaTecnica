import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FaTh, FaUserCircle } from 'react-icons/fa';

const SerchAnimals = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    alert(`Realizando búsqueda de: ${query}`);
  };
    return ( <>
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      {/* Logo de la izquierda */}
      <div className="text-xl font-semibold text-gray-700">
      Prueba Tecnica
      </div>
      
      <div className="text-sm text-gray-500">
        
      </div>
      
      {/* Iconos a la derecha */}
      <div className="flex items-center space-x-4">
        <FaTh className="text-gray-500 cursor-pointer hover:text-gray-700" />
        <FaUserCircle className="text-2xl text-gray-500 cursor-pointer hover:text-gray-700" />
      </div>
    </header>

     <div className="flex justify-center mt-20">
      <h1 className="text-6xl font-bold">
        <span className="text-blue-600">G</span>
        <span className="text-red-600">o</span>
        <span className="text-yellow-500">o</span>
        <span className="text-blue-600">g</span>
        <span className="text-green-600">l</span>
        <span className="text-red-600">e</span>
      </h1>
    </div>
    <div className="flex flex-col items-center mt-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar en Google o escribir URL"
        className="w-full max-w-lg p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex space-x-4 mt-4">
        <button
          onClick={handleSearch}
          className="px-6 py-2 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
        >
          Buscar
        </button>
      </div>
    </div>
    </> );
}
 
export default SerchAnimals;