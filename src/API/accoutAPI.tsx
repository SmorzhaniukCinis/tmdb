import axios from "axios";
import {instance} from "./index";

const accountAPI = {
    getDetails : async (sessionId:string) => {
        const res = await instance.get(`account&session_id=${sessionId}` ,)
        return res.data
    }
}




// export const getDetails = async () => {
//     debugger
//     const response = await $host.post('api/user/registration' , {email, password, role: 'ADMIN'})
//     return response
// }