import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const CoursesContext = createContext();

export default function CoursesProvider({ children }) {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios
            .get('https://repoprovas-back-end.herokuapp.com/api/courses')
            .then(r => setCourses(r.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <CoursesContext.Provider value={{ courses }}>
            {children}
        </CoursesContext.Provider>
    );
}