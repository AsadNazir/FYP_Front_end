
import { authAPI } from "./api";

export const LoginFunction = async (username, password) => {

    const response = await fetch(authAPI.login, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
    })
       
    const data = response.json();

    return data;
}
