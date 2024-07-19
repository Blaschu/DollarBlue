import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Bienvenido a la Pagina de Cotizaciones</h1>
            <nav>
                <ul>
                    <li><Link to="/currency">Cotización</Link></li>
                    <li><Link to="/historical">Cotizaciones Históricas</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;