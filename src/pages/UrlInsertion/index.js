import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { NewExamDataContext } from '../../contexts/NewExamDataContext';

export default function UrlInsertion() {
    const { url, setUrl, sendDataToServer, finishedPosting } = useContext(NewExamDataContext);
    const history = useHistory();

    const postExam = e => {
        e.preventDefault();

        try {
            sendDataToServer();
        }
        catch {
            return alert('Houve um problema ao publicar a prova')
        }
        
        history.push('/');
    }


    return (
        <Container finishedPosting={finishedPosting}>
            <span>Link da prova</span>
            <form onSubmit={postExam}>
                <input
                    placeholder='https://...'
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                />

                <Button type='submit' disabled={url.length === 0}>Concluir</Button>
            </form>
            
            <div>Carregando...</div>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Patrick Hand', cursive;
    color: #EFEFEF;
    padding: 0 40px;

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    span {
        font-size: 1.17rem;
        margin-bottom: 18px;
    }

    input {
        width: 100%;
        height: 50px;
        outline: none;
        font-family: 'Patrick Hand', cursive;
        font-size: 1.1rem;
        border: none;
        border-radius: 10px;
        padding-left: 20px;
        margin-bottom: 18px;
    }

    div {
        font-family: 'Patrick Hand', cursive;
        color: #EFEFEF;
        margin-top: 25px;
        font-size: 1.2rem;
        display: ${({ finishedPosting }) => finishedPosting ? 'none' : 'initial'}
    }
`;

const Button = styled.button`
    width: 146px;
    height: 45px;
    border-radius: 10px;
    background: ${({ disabled }) => disabled ? 'gray' : 'green'};
    color: white;
    font-family: 'Patrick Hand', cursive;
    font-size: 1.1rem;
    align-self: flex-end;
`;