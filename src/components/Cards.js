import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup";
import MyContext from "../MyContext";
import { useContext } from "react";

function Cards() {
  const {products, setProducts} = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <div>
      <Card className="m-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={products.img} />
        <Card.Body>
          <Card.Title>{products.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush ">
          <Card.Text className="m-3 fw-bold">Descripción: {products.desc}</Card.Text>
          <Card.Text className="m-3 fw-bold">{products.category}</Card.Text>
        </ListGroup>
        <Card.Body>
          <Card.Text className="text-center fs-2 fw-normal">
            ${products.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;