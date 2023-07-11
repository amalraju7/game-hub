import axios from "axios"


 export default  axios.create({
        baseURL:"https://api.rawg.io/api",
        params:{
            key : '4936e48839314dbfbbf3bb7c93a78345'
        }
    })

