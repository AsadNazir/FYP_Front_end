import { sectionAPI } from "./api";

const getAllSections = async () => {
    const response = await fetch(sectionAPI.getAll, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    return data;
}

export { getAllSections };