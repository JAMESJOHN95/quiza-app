import axios from "axios";

const commonApi = async (httpmethord,url,reqbody)=>{
    const reqConfig = {
        method:httpmethord,
        url,
        data:reqbody,
        headers:{
            "Content-Type":"application/json"
        }
    }
        return  await axios(reqConfig).then(
            (res)=>{
                return(res)
            }
        )
        .catch(err=>{
            return(err)
        })
}

export default commonApi;