import React from "react"
import Cards from "./Cards";
//import {objetosJSON as objects} from "public/objetos.json"
//import Cards from "./Cards";

/*const boton = document.getElementById ("boton");
const objeto = document.querySelector (".objeto");
const total = document.getElementById ("total");
const [minPrice, setMinPrice] = useState(0);
const [maxPrice, setMaxPrice] = useState(0);

function validate(arr) {
    if (arr.includes('')) {
        return false;
    }
    return true;
}

function createProperty(property) {
    let newProperty = "";
    if (validate([property])) {
        newProperty = <Cards/>
    }
    return newProperty;    
}



 
function maestra() {
    const min = document.getElementById ("min").value
    const max = document.getElementById ("max").value
    let html = ""

    
    if (validate([cuartos,min,max])) {
        console.log (min, max, objects);
        let suma  = "";
        for (let object of objects){
            if ((Number(min) <=  products.price) && ( Number(max) >=  products.price)) {
                html+= createProperty(object);
            suma = Number(suma)+ 1;
            }
    
        } 
        objeto.innerHTML=html;
        total.innerHTML="total: "+ suma;
    }

else { 
        alert ("Por favor rellenar los campos");
    }

}

boton.addEventListener("click",()=>{
    maestra();
})*/


const Sidebar = () => {

    return (
        
        
        <div>
            
        <section>
            <aside>
            <h1>Precio</h1>
            <div className="me-4">
                        <p>desde: </p><input min="0" id="min" className="form-control " type="number"></input>
                    </div>
                    <div>
                        <p> hasta:</p>
                        <input min="0" id="max" className="form-control " type="number"></input>
                    </div>   
                    <button className="btn btn-warning" id="boton" >Buscar</button>
            <h1 className="category">Categorías</h1> 
            <p>Mascotas <span>(1)</span></p>
            <p>Vestuario <span>(2)</span></p>
            <p>Hogar <span>(1)</span></p>
            <p>Tecnologia<span>(1)</span></p>
            <p>Servicios<span>(1)</span></p>
            </aside>
        </section>

        <main>
            <Cards/>
        </main>

        </div>
    )
}

export default Sidebar;