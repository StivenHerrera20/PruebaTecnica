import React, { useState, useEffect } from 'react';

const Results = () => {
    const [results, setResults] = useState([]); 
  const [selectedResult, setSelectedResult] = useState(null); 
  const [inputValue, setInputValue] = useState(''); 

  
  useEffect(() => {

    fetch(`http://127.0.0.1:3900/api/animals/search?name=${inputValue}`) 
      .then((response) => response.json())
      .then((data) => {
        setResults(data); 
      })
      .catch((error) => console.error('Error al obtener los datos:', error));
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  
  // Función para manejar la selección de un elemento
  const handleSelectResult = (result) => {
    console.log(result)
    setSelectedResult(result);
  };
  const reiniciarBusqueda = (event) => {
    handleInputChange(event); 
    setSelectedResult(null)
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 flex justify-center">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md flex">
        
        {/* Sección de resultados de búsqueda */}
        <div className="w-2/3">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            onChange={reiniciarBusqueda}
          />
          <ul>
            {results && results.length > 0 ? results.map((result, index) => (
              <li
                key={index}
                className="mb-4 cursor-pointer"
                onClick={() => handleSelectResult(result)}
              >
                <div href="#" className="text-blue-700 font-medium cursor-pointer">{result.name}</div>
                <p className="text-gray-600 text-sm">{result.description}</p>
              </li>
            )):""}
          </ul>
        </div>
        
        {/* Sección de detalle que se muestra al seleccionar un resultado */}
        {selectedResult && (
          <div className="w-1/3 pl-6">
            <div className="bg-gray-50 p-4 border border-gray-200 rounded-lg">
              <img
                src={selectedResult.urlImage || 'https://via.placeholder.com/150'}
                alt={selectedResult.name}
                className="w-full rounded mb-4"
              />
              <button href="#" className="text-blue-700 font-medium">{selectedResult.name}</button>
              <p className="text-gray-600 text-sm mt-2">{selectedResult.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
 
export default Results;