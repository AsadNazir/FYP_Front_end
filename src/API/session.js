import { sessionAPI } from "./api";

const getAllSessions = async () => {
    const response = await fetch(sessionAPI.getAll, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    return data;
}

export { getAllSessions };
