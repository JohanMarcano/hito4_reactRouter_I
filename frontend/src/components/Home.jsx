import React, { useEffect, useState } from 'react'
import CardPizza from './CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([])

// Función asíncrona para obtener las pizzas desde la API
const getPizzas = async () => {
  // Realiza una solicitud GET a la API para obtener la lista de pizzas
  const response = await fetch("http://localhost:3000/api/pizzas/");
  // Convierte la respuesta en formato JSON para poder trabajar con ella
  const result = await response.json();
  // Actualiza el estado con los datos obtenidos de la API
  setPizzas(result);
};

  useEffect(()=>{getPizzas()}, [])
  console.log(pizzas)


  return (
    <div className='contenedorH'>
      {pizzas.map((p, i) => {
        return(
          <CardPizza key={i} pizza={p} />
        )
      })}
    </div>
  )
}

export default Home