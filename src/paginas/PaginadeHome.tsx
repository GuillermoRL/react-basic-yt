import React from "react";
import styled from "styled-components";
import Navegacion from "../componentes/Navegacion";
import "../../public/styles/index.css";

const Wrapper = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    background-color: black;
`;

const PaginaDeHome = () => {
    return (
        <Wrapper>
            <Navegacion />
        </Wrapper>
    )
};

export default PaginaDeHome;
