import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { media } from '../../assets/mediaQuery';

export default function MainPage() {
    return (
        <Container>
            <WelcomeTextContainer>
                <span>Seja bem-vindo!</span>
                <span>
                    E estamos aqui!<br />
                    Chegamos para servir de apoio para aqueles estudantes que dão tudo de si resolvendo listas
                    de exercícios fáceis, mas depois dão de cara com provas duas vezes mais difíceis. <br />
                    Você vai encontrar aqui provas de anos anteriores, para assim chegar mais preparado(a), 
                    tirar uma nota boa e sair de férias mais cedo. <br />
                    Além disso, você pode ajudar a manter o RepoProvas vivo! Faça um upload de alguma prova 
                    que tiver, e ajude o próximo a tirar férias mais cedo junto com você!<br />                    
                </span>
                <span>Reproprovas - Criado por estudantes, para estudantes :)</span>
            </WelcomeTextContainer>

            <ButtonsContainer>
                <Link to='/'>Me ajuda, RepoProvas!</Link>
                <Link to='/inserir-dados'>Quero contribuir</Link>
            </ButtonsContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;

    ${media} {
        flex-direction: column;
    }
`;

const WelcomeTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #EFEFEF;
    width: 60%;
    padding-left: 80px;
    padding-right: 80px;
    margin-top: 60px;
    border-right: 1px solid #EFEFEF;

    span {
        font-family: 'Patrick Hand', cursive;
        font-size: 1.1rem;
        line-height: 32px;
    }
    
    span:first-child {
        font-family: 'Caveat', cursive;
        font-size: 3.125rem;
        margin-bottom: 40px;
        line-height: 60px;
    }

    span:last-child {
        margin-top: 25px;
    }

    ${media} {
        padding: 0 20px;
        border: none;
        width: 100%;

        span:first-child {
            margin-bottom: 15px;
        }


        span:nth-child(2) { display: none; }
    }
`;

const ButtonsContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 0 10px;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        margin-top: 15px;
        width: 326px;
        height: 55px;
        background-color: #EFEFEF;
        color: black;
        font-family: 'Patrick Hand', cursive;
        border-radius: 10px;
        font-size: 1.17rem;

        &:hover {
            color: #EFEFEF;
            background-color: gray;
        }
    }
`;