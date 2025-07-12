import React from "react";
import styled from "styled-components";

const Contenedor = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: 20px;
`;

const Iconos = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const Circulo = styled.div`
	width: 20px;
	height: 20px;
	background-color: pink;
	border-radius: 50px;
`;

const Navegacion = () => {
    return (
        <nav>
            <Contenedor>
                <div><a href="/"><img src="/images/youtube.png" alt="Logo" /></a></div>
                <form action="/busqueda" method="get">
                    <input type="text" name="q" placeholder="Buscar" />
                </form>
                <Iconos>
                    <Circulo id="1"></Circulo>
                    <Circulo id="2"></Circulo>
                </Iconos>
            </Contenedor>
        </nav>
    );
};

export default Navegacion;
