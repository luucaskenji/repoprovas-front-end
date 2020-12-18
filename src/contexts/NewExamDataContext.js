import React, { useState, createContext } from 'react';
import axios from 'axios';

export const NewExamDataContext = createContext();

export default function NewExamDataProvider({ children }) {
    const [chosenCourse, setChosenCourse] = useState('');
    const [chosenCourseProfessor, setChosenCourseProfessor] = useState('');
    const [chosenTypeOfExam, setChosenTypeOfExam] = useState('');
    const [semester, setSemester] = useState('');
    const [url, setUrl] = useState('');
    const [finishedPosting, setFinishedPosting] = useState(true);
    
    const sendDataToServer = () => {
        setFinishedPosting(false);

        const body = {
            url,
            courseId: chosenCourse.id,
            professorId: chosenCourseProfessor.id,
            semester,
            type: chosenTypeOfExam
        }

        axios.post('http://localhost:3000/api/new-exam', body)
            .then(r => {
                setFinishedPosting(true);
                alert('Prova publicada com sucesso');
            })
            .catch(err => console.log(err))
    }

    const value = {
        chosenCourse,
        setChosenCourse,
        chosenCourseProfessor,
        setChosenCourseProfessor,
        chosenTypeOfExam,
        setChosenTypeOfExam,
        semester,
        setSemester,
        url,
        setUrl,
        sendDataToServer,
        finishedPosting
    };

    return (
        <NewExamDataContext.Provider value={value}>
            {children}
        </NewExamDataContext.Provider>
    );
}