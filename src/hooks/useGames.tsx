import { useEffect, useState } from "react";
import apliClient from "../services/apliClient";
import {Text} from "@chakra-ui/react"
import { CanceledError } from "axios";

export interface Game{
    id:number,
    rating:number,
    metacritic:number,
    name:string,
    background_image:string,
    parent_platforms:  {platform:Platform}[]
    
}
   export interface Platform{
        id:number,
        name:string,
        slug:string,
    }
    interface FetchGamesResponse {
        count:number,
        results:Game[],
        
    
    }
    
const useGames = () => {

    const[games,setGames] = useState<Game[]>([]);
    const [error,setError] = useState("");

   

    useEffect(() => {
        const controller = new AbortController();
        apliClient.get("/games",{signal:controller.signal}).then((res)=>{
            setGames(res.data.results);
            console.log(res);
        }).catch((error)=>{
            if(error instanceof CanceledError) return;
            setError(error.message);
            return () => controller.abort();
        })


      
    },[]);
    return({games,error})
}

export default useGames;
