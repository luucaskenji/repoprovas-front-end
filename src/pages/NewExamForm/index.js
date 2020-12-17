import React from 'react';
import styled from 'styled-components';

export default function NewExamForm() {
    return (
        <Container>
            <form>
                <div>
                    <div>
                        <SelectContainer>
                            <label>Matéria</label>
                            <select>
                                <option>Teste</option>
                            </select>
                        </SelectContainer>
    
                        <SelectContainer>
                            <label>Professor</label>
                            <select>
                                <option>Teste</option>
                            </select>
                        </SelectContainer>
                    </div>
    
                    <div>
                        <SelectContainer>
                            <label>Tipo de prova</label>
                            <select>
                                <option>Teste</option>
                            </select>
                        </SelectContainer>
    
                        <InputContainer>
                            <span>Semestre</span>
                            <input />
                        </InputContainer>
                    </div>
                </div>

                <div>
                    <Button>Prosseguir</Button>
                </div>
            </form>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    font-family: 'Patrick Hand', cursive;
    color: #EFEFEF;
    padding: 0 40px;
    
    form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        & > div:first-child {
            width: 65%;

            & > div {
                display: flex;
                justify-content: space-around;
            }
        }

        & > div:last-child {
            flex-grow: 1;
            text-align: center;
        }
    }
`;

const SelectContainer = styled.div`
    display: inline-block;
    margin-bottom: 45px;
    font-size: 1.17rem;

    select {
        display: block;
        width: 200px;
        height: 45px;
        margin-top: 15px;
        outline: none;
    }
`;

const InputContainer = styled.div`
    display: inline-block;
    font-size: 1.17rem;

    input {
        display: block;
        width: 200px;
        height: 45px;
        margin-top: 15px;
        outline: none;
    }
`;

const Button = styled.button`
    width: 146px;
    height: 55px;
    border-radius: 10px;
    background: green;
    color: white;
    font-family: 'Patrick Hand', cursive;
    font-size: 1.17rem;
`;