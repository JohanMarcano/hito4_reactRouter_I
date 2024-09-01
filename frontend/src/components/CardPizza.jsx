import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function CardPizza({ pizza }) {
//  const {name, img, desc, price, ingredients, calories}
  return (
    <Card style={{ width: '26rem', margin: '15px'}}>
      <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>
          {pizza.desc}
        </Card.Text>
        <Card.Text>
          Precio: ${pizza.price}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Ingredientes: <br /> {pizza.ingredients}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex grid gap-5">
        <Button variant="primary margin-5">Añadir al Carrito</Button>
        <Button variant="primary">Ver detalle</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPizza;
