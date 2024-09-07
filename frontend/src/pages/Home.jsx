import React, { useEffect, useState } from 'react'
import CardPizza from '../components/CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [cart, setCart] = useState([]); // Estado para manejar el carrito


// Función asíncrona para obtener las pizzas desde la API
const getPizzas = async () => {
  // Realiza una solicitud GET a la API para obtener la lista de pizzas
  const response = await fetch("http://localhost:3000/api/pizzas/");
  // Convierte la respuesta en formato JSON para poder trabajar con ella
  const result = await response.json();
  // Actualiza el estado con los datos obtenidos de la API
  setPizzas(result);
};

  useEffect(() => {
    getPizzas();
  }, []);
  console.log(pizzas)

  const addToCart = (pizza) => {
    setCart(prevCart => {
      const exists = prevCart.find(p => p.id === pizza.id);
      if (exists) {
        return prevCart.map(p => 
          p.id === pizza.id ? { ...p, count: p.count + 1 } : p
        );
      } else {
        return [...prevCart, { ...pizza, count: 1 }];
      }
    });
  };

  console.log(cart); // Para verificar el carrito en la consola


  return (
    <div className='contenedorH'>
      {pizzas.map((p, i) => {
        return(
          <CardPizza key={i} pizza={p} addToCart={addToCart}/>
        )
      })}
    </div>
  )
}

export default Home