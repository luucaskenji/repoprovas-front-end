import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ProfessorItem from '../../components/ProfessorItem';

export default function ProfessorsList() {
    const [professors, setProfessors] = useState([]);
    const [exams, setExams] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/api/professors')
            .then(r => setProfessors(r.data))
            .catch(err => console.log(err));

        axios
            .get(`http://localhost:3000/api/exams`)
            .then(r => setExams(r.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <Container>
            {professors.map(p => <ProfessorItem key={p.id} professor={p.name} examsList={exams} />)}
        </Container>
    );
}

const Container = styled.ul`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Patrick Hand', cursive;
    color: #EFEFEF;
    padding: 0 40px;
    flex-wrap: wrap;
`;