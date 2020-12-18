import React, { useState, createContext } from 'react';

export const NewExamDataContext = createContext();

export default function NewExamDataProvider({ children }) {
    const [chosenCourse, setChosenCourse] = useState('');
    const [chosenCourseProfessor, setChosenCourseProfessor] = useState('');
    const [chosenTypeOfExam, setChosenTypeOfExam] = useState('');
    const [semester, setSemester] = useState('');
    const [url, setUrl] = useState('');
    
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
        setUrl
    };

    return (
        <NewExamDataContext.Provider value={value}>
            {children}
        </NewExamDataContext.Provider>
    );
}