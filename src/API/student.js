import { studentAPI } from "./api";

const addStudent = async (student) => {
    const response = await fetch(studentAPI.addStudent, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    });
    const data = await response.json();
    return data;
}


const getStudents = async () => {
    const response = await fetch(studentAPI.getStudents);
    const data = await response.json();
    return data;
} 

const deleteStudent = async (id) => {
    const response = await fetch(studentAPI.deleteStudent, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    });
    const data = await response.json();
    return data;
} 

const updateStudent = async (student) => {
    const response = await fetch(studentAPI.updateStudent, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    });
    const data = await response.json();
    return data;
}
