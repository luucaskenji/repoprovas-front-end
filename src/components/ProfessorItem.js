import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { media } from '../assets/mediaQuery';

export default function ProfessorItem({ professor, examsList }) {
    const professorExams = examsList.filter(e => e.professor === professor);

    return (
        <Item to={{
            pathname: '/professor/provas',
            state: { professor, professorExams }
        }}>
            <span>{professor}</span>
            <span>Provas disponíveis: {professorExams.length}</span>
        </Item>
    );
}

const Item = styled(Link)`
    display: inline-block;
    background: lightgray;
    width: 200px;
    height: 130px;
    color: black;
    border-radius: 5px;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;

    ${media} {
        height: 100px;
        width: 175px;
    }

    span { text-align: center; }

    span:last-child {
        margin-top: 10px;
        font-size: 0.8rem;
    }
`;