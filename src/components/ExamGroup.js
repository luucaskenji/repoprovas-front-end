import React from 'react';
import styled from 'styled-components';

export default function ExamGroup({ type, exams }) {
    return (
        <Container>
            <span>{type}</span>

            {
                exams && exams.map(e => {
                    return (
                        <InfoContainer key={e.id}>
                            <span>{`Matéria: ${e.course}`}</span>
                            <span>{`Semestre: ${e.semester}`}</span>
                            <a href={e.url} target='__blank'>{e.url}</a>
                        </InfoContainer>
                    );
                })
            }
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    margin-bottom: 60px;
    background-color: #1A1A1A;
    padding: 15px;
    border-radius: 10px;

    & > span {
        font-size: 1.4rem;
        color: blue;
    }
`;

const InfoContainer = styled.div`
    margin: 25px;

    span, a {
        display: block;
        font-size: 1rem;
        margin: 2px;
    }
`;