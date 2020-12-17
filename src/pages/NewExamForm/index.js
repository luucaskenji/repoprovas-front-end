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
    console.log(courses);

    useEffect(() => {
        axios.get('http://localhost:3000/api/courses')
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
                            <select>
                                {
                                    courses.map(c => <option>{c.name}</option>)
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