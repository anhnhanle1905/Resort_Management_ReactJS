import axios from "axios"
const url = 'http://localhost:3030/auth/'


 export const loginApi = async (data) =>{
    try {
        const res = await axios.post(`${url}login`,data)
        if(res){
            localStorage.setItem("token",res?.data?.token)
            return true
        }
    } catch (error) {
       return false
    }
}