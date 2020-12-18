import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
    Container,
    SelectContainer,
    InputContainer,
    Button
} from './FormStyles';

export default function NewExamForm() {
    const [courses, setCourses] = useState([]);
    const [chosenCourse, setChosenCourse] = useState(null);

    useEffect(() => {
        axios.get('https://repoprovas-back-end.herokuapp.com/api/courses')
            .then(r => setCourses(r.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <Container>
            <form>
                <div>
                    <div>
                        <SelectContainer>
                            <label>Matéria</label>
                            <select value={chosenCourse} onChange={e => setChosenCourse(e.target.value)}>
                                {
                                    courses.length > 0
                                        ? courses.map(c => <option>{c.name}</option>)
                                        : <option>...</option>
                                }
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