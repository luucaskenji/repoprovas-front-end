import styled from 'styled-components';

export const Container = styled.div`
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

export const SelectContainer = styled.div`
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

export const InputContainer = styled.div`
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

export const Button = styled.button`
    width: 146px;
    height: 55px;
    border-radius: 10px;
    background: green;
    color: white;
    font-family: 'Patrick Hand', cursive;
    font-size: 1.17rem;
`;