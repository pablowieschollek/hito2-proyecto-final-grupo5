import React from 'react';

import Sidebar from '../components/Sidebar';
import Cards from '../components/Cards';
import { Row } from 'react-bootstrap';
import MyContext from "../MyContext";
import { useContext } from "react";


const Galeria = () => {

    const {products, setProducts} = useContext(MyContext);

    return (
        <div>
            <Sidebar/>
            <Row md={3} lg={3} xl={3}>
        {products.map((product) => ( <Cards key={product.id} product={product}/> ))}
      </Row>
            
        </div>

    )
};

export default Galeria;