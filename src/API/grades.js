import { gradeAPI } from "./api";

const getAllGrades = async () => {
    const response = await fetch(gradeAPI.getGrades, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    return data;
}

export { getAllGrades };