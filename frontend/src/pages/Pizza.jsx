import React, { useEffect, useState } from 'react';
import CardPizza from '../components/CardPizza';
import '../components/Pizza.css';

const Pizza = () => {
  const [pizza, setPizza] = useState(null); // Inicializa como `null` porque esperas un objeto

  // Función asíncrona para obtener la pizza desde la API
  const getPizza = async () => {
    try {
      // Realiza una solicitud GET a la API para obtener una pizza específica
      const response = await fetch("http://localhost:3000/api/pizzas/p001");
      // Convierte la respuesta en formato JSON para poder trabajar con ella
      const result = await response.json();
      // Actualiza el estado con los datos obtenidos de la API
      setPizza(result);
    } catch (error) {
      console.error('Error fetching pizza:', error);
    }
  };

  useEffect(() => {
    getPizza();
  }, []);

  console.log(pizza);

  return (
    <div className='contenedorHH'>
      {pizza ? ( // Verifica que `pizza` no sea null antes de intentar renderizarla
        <CardPizza pizza={pizza} />
      ) : (
        <p>Cargando pizza...</p> // Muestra un mensaje de carga mientras esperas la respuesta de la API
      )}
    </div>
  );
}

export default Pizza;
