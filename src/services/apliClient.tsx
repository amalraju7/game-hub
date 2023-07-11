import axios from "axios"


 export default  axios.create({
        baseURL:"https://api.rawg.io/api",
        params:{
            key : '8dc769fe87144933832079576e5faa78'
        }
    })

