import  {axiosWithAuth}  from "../helpers/axiosWithAuth";

const fetchColorService = () => {
    
    return axiosWithAuth().get("/colorlist")
    .then((res) => {
      console.log(res)
    })
    .catch((err)=>{      
      console.log({err})
    })
    
}

export default fetchColorService;