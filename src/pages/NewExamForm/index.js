import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import axios from 'axios';

import { NewExamDataContext } from '../../contexts/NewExamDataContext';
import {
    Container,
    SelectContainer,
    InputContainer,
    Button
} from './FormStyles';

export default function NewExamForm() {
    const [courses, setCourses] = useState([]);
    const [courseProfessors, setCourseProfessors] = useState([]);
    const {
        chosenCourse, 
        setChosenCourse, 
        chosenCourseProfessor,
        setChosenCourseProfessor,
        chosenTypeOfExam,
        setChosenTypeOfExam,
        semester,
        setSemester } = useContext(NewExamDataContext);
    const isButtonDisabled = !chosenCourse || !chosenCourseProfessor || !chosenTypeOfExam || !semester;
    const history = useHistory();
    
    useEffect(() => {
        axios
            .get('https://repoprovas-back-end.herokuapp.com/api/courses')
            .then(r => setCourses(r.data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        if (chosenCourse.id) {
            axios
                .get(`https://repoprovas-back-end.herokuapp.com/api/${chosenCourse.id}/professors`)
                .then(r => setCourseProfessors(r.data))
                .catch(err => console.log(err));
        }
    }, [chosenCourse]);

    const validate = e => {
        e.preventDefault();

        for (let i = 0; i < semester.length; i++) {
            if (semester[i] === '_') return alert('Digite o semestre corretamente')
        }
        
        history.push('/inserir-link');
    };

    return (
        <Container>
            <form onSubmit={validate}>
                <div>
                    <div>
                        <SelectContainer>
                            <label>Matéria</label>
                            <select
                                value={chosenCourse.name}
                                onChange={e => setChosenCourse(courses.find(c => c.name === e.target.value))}
                            >
                                <option></option>
                                {
                                    courses.length > 0
                                        ? courses.map(c => <option key={c.id}>{c.name}</option>)
                                        : <option>...</option>
                                }
                            </select>
                        </SelectContainer>
    
                        <SelectContainer>
                            <label>Professor</label>
                            <select
                                disabled={!chosenCourse}
                                value={chosenCourseProfessor.name}
                                onChange={e => setChosenCourseProfessor(courseProfessors.find(p => p.name === e.target.value))}
                            >
                                <option></option>
                                {
                                    courseProfessors.length === 0
                                        ? <option>-</option>
                                        : courseProfessors.map(p => <option key={p.id}>{p.name}</option>)
                                }
                            </select>
                        </SelectContainer>
                    </div>
    
                    <div>
                        <SelectContainer>
                            <label>Tipo de prova</label>
                            <select
                                value={chosenTypeOfExam}
                                onChange={e => setChosenTypeOfExam(e.target.value)}
                            >
                                <option></option>
                                <option>P1</option>
                                <option>P2</option>
                                <option>P3</option>
                                <option>PF</option>
                                <option>2ch</option>
                                <option>Outras</option>
                            </select>
                        </SelectContainer>
    
                        <InputContainer>
                            <span>Semestre</span>
                            <InputMask mask={'9999.9'} value={semester} onChange={e => setSemester(e.target.value)}/>
                        </InputContainer>
                    </div>
                </div>

                <div>
                    <Button type='submit' disabled={isButtonDisabled}>Prosseguir</Button>
                </div>
            </form>
        </Container>
    );
}