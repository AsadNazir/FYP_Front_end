import { batchAPI } from "./api";

const getAllBatches = async () => {
    const response = await fetch(batchAPI.getAll, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    return data;
}

export { getAllBatches };