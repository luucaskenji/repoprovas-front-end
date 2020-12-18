import React from 'react';
import styled from 'styled-components';

import ExamGroup from '../../components/ExamGroup';

export default function ProfessorExamsList(props) {
    const { professor, professorExams } = props.location.state;
    const examsTypes = ['P1', 'P2', 'P3', 'PF', '2ch', 'Outras'];

    const availableExams = {
        P1: professorExams.filter(e => e.type === 'P1'),
        P2: professorExams.filter(e => e.type === 'P2'),
        P3: professorExams.filter(e => e.type === 'P3'),
        PF: professorExams.filter(e => e.type === 'PF'),
        '2ch': professorExams.filter(e => e.type === '2ch'),
        Outras: professorExams.filter(e => e.type === 'Outras')
    }

    return (
        <Container>
            {examsTypes.map((t, i) => <ExamGroup key={i} type={t} professor={professor} exams={availableExams[t]} />)}
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    font-family: 'Patrick Hand', cursive;
    color: #EFEFEF;
    padding: 20px 40px;
`;