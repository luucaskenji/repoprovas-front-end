import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import axios from 'axios';

import {
    Container,
    SelectContainer,
    InputContainer,
    Button
} from './FormStyles';

export default function NewExamForm() {
    const [courses, setCourses] = useState([]);
    const [chosenCourse, setChosenCourse] = useState('');
    const [courseProfessors, setCourseProfessors] = useState([]);
    const [chosenCourseProfessor, setChosenCourseProfessor] = useState('');
    const [chosenTypeOfExam, setChosenTypeOfExam] = useState('');
    const [semester, setSemester] = useState('');
    
    useEffect(() => {
        axios
            .get('https://repoprovas-back-end.herokuapp.com/api/courses')
            .then(r => setCourses(r.data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        const courseObject = courses.find(c => c.name === chosenCourse);

        if (courseObject) {
            const chosenCourseId = courseObject.id;

            axios
                .get(`http://localhost:3000/api/${chosenCourseId}/professors`)
                .then(r => setCourseProfessors(r.data))
                .catch(err => console.log(err));
        }

    }, [chosenCourse]);

    return (
        <Container>
            <form>
                <div>
                    <div>
                        <SelectContainer>
                            <label>Matéria</label>
                            <select
                                value={chosenCourse}
                                onChange={e => setChosenCourse(e.target.value)}
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
                                value={chosenCourseProfessor}
                                onChange={e => setChosenCourseProfessor(e.target.value)}
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
                    <Button>Prosseguir</Button>
                </div>
            </form>
        </Container>
    );
}