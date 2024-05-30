import { departmentAPI } from "./api";

const getAllDept = async () => {
    const response = await fetch(departmentAPI.getAll, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    return data;
}

export { getAllDept };