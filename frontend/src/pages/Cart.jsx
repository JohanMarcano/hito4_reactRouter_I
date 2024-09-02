import React, { useState } from 'react';
import { pizzaCart } from '../components/pizzas'; 
import CardPizza from '../components/CardPizza';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // Comprobación de los datos del carrito
  console.log(cart);

  // Función para aumentar la cantidad de una pizza
  const increaseQuantity = (id) => {
    const updatedCart = cart.map(pizza => 
      pizza.id === id 
        ? { ...pizza, count: pizza.count + 1 } 
        : pizza
    );
    setCart(updatedCart);
  };

  // Función para disminuir la cantidad de una pizza
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map(pizza => 
      pizza.id === id 
        ? { ...pizza, count: Math.max(pizza.count - 1, 0) } 
        : pizza
    ).filter(pizza => pizza.count > 0); // Elimina pizza si la cantidad es 0
    setCart(updatedCart);
  };

  // Función para calcular el total de la compra
  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);
  };

  return (
    <Container className="my-4 ">
      <Row>
        {cart.length > 0 ? (
          cart.map(pizza => (
            <Col xs={12} sm={6} md={4} key={pizza.id} className="mb-4">
              <CardPizza 
                name={pizza.name}
                price={pizza.price}
                // Asegúrate de que ingredients esté definido
                ingredients={pizza.ingredients || []}
                img={pizza.img}
              />
              <div className="d-flex justify-content-between align-items-center mt-2">
                <Button variant="secondary" onClick={() => decreaseQuantity(pizza.id)}>-</Button>
                <span>Quantity: {pizza.count}</span>
                <Button variant="secondary" onClick={() => increaseQuantity(pizza.id)}>+</Button>
              </div>
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <p>El carrito está vacío.</p>
          </Col>
        )}
      </Row>
      <div className="text-center mt-4">
        <h3>Total: ${calculateTotal().toLocaleString()}</h3>
        <Button variant="primary">Pagar</Button>
      </div>
    </Container>
  );
};

export default Cart;
