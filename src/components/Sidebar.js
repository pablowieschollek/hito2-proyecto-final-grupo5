import React from "react"
import Cards from "./Cards";

const Sidebar = () => {
    return (
        <div>
        <section>
            <aside>
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