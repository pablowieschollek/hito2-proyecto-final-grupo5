import React from "react";
//import { useContext } from "react";
//import { useParams } from "react-router-dom";
//import MyContext from "../MyContext";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

export const InfoProducto = () => {
  
/*<img src={} alt={} />*/
  return (
    <div className="contenedor m-5">
      <Container>
        <Row>
          <Col>
            <img></img> 
          </Col>
          <Col>
            <h3>{}</h3>
            <p className="descrip"></p>
            <p className="fw-bold"></p>
            <p className="fw-bold fs-2">Precio ${}</p>
            <p></p>
            <p></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoProducto;