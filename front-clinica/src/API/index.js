import axios from "axios"


const API=axios.create({
    baseURL:"localhost:8080"
})

export default API