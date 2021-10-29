import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzk3MWE3ODg0ZTMxNmE0NDViNmYyZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTQzODc0NCwiZXhwIjoxNjM1Njk3OTQ0fQ.60etgZhpO8JpR5fkdz-q4QCiLXy-weB4nZ1DJ69MFhw"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});