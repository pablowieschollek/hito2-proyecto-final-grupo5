import React from "react";
import Logo from "../assets/img/back2.png";
import BarraNavegacion from "../components/Navbar";

const Home = () => {
  return (
    <div>
      
      <h1 className=" m-3 p-3">¡Bienvenido Conecta-2!</h1>
      <img src={Logo} alt="marketplace" />
    </div>
  );
};

export default Home;