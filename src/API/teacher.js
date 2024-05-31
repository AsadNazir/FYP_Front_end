import { teacherAPI} from "./api";

const getAllTeachers = async () => {
    const response = await fetch(teacherAPI.getTeachers, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    return data;
}

const getAllSupervisors = async () => {
    const response = await fetch(teacherAPI.getAllSupervisors, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    return data;
}

export { getAllTeachers, getAllSupervisors };