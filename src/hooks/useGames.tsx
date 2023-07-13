import { useEffect, useState } from "react";
import apliClient from "../services/apliClient";
import {Text} from "@chakra-ui/react"
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useCategory";

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

    
const useGames = (selectedGenre : Genre | null ) => useData<Game>("/games",{params:{genres:selectedGenre?.id}},[selectedGenre?.id])
export default useGames;
