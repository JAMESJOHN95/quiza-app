import commonApi from "./CommonApi";
import { server_url } from "./Server";


export const getAllDataApi = async()=>{
    return await commonApi("GET",`${server_url}/data`,"")
}
