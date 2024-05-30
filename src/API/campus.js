import { campusAPI } from "./api";

const getAllCampuses = async () => {
    const response = await fetch(campusAPI.getAll, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    return data;
}

export { getAllCampuses };