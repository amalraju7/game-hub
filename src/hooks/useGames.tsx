import { useEffect, useState } from "react";
import apliClient from "../services/apliClient";
import {Text} from "@chakra-ui/react"
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useCategory";
import { GameQuery } from "../App";

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

    
const useGames = (gameQuery : GameQuery) => useData<Game>("/games",{params:{genres:gameQuery.genre?.id, platforms:gameQuery.platform?.id,ordering:gameQuery.sortOrder}},[gameQuery])
export default useGames;
