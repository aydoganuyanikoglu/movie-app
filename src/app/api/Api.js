import axios from "axios";

const url = process.env.NEXT_PUBLIC_MY_URL
const tokenKey = process.env.NEXT_PUBLIC_MY_TOKEN

export const myAxios = axios.create({
    baseURL: `${url}`,
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${tokenKey}`
    }
})

