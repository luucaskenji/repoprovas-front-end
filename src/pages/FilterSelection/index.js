import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function FilterSelection() {
    return (
        <Container>
            <Button to='/'>Filtrar por matéria</Button>
            <Button to='/professores/lista'>Filtrar por professor</Button>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Patrick Hand', cursive;
    color: #EFEFEF;
    padding: 0 40px;
`;

const Button = styled(Link)`
    width: 325px;
    height: 75px;
    border-radius: 10px;
    background: #EFEFEF;
    color: black;
    font-family: 'Patrick Hand', cursive;
    font-size: 1.17rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: #EFEFEF;
        background-color: gray;
    }
`;