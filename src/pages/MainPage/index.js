import React from 'react';
import styled from 'styled-components';

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
                <button>Me ajuda, RepoProvas!</button>
                <button>Quero contribuir</button>
            </ButtonsContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
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
    }

    span:last-child {
        margin-top: 25px;
    }
`;

const ButtonsContainer = styled.div`
    flex-grow: 1;

    button {
        display: block;
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