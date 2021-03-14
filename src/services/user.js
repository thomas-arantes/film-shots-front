import axios from "axios"
import { BASE_URL } from "../constants/url"
import { goToFeed } from "../routes/coordinator"

export const login = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}user/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(history)
        setRightButtonText("Sair")
    })
    .catch((err) => alert(err.response.data.message))
}

export const signup = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}user/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(history)
        
    })
    .catch((err) => alert(err.response.data.message))
}
