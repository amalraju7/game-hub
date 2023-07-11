import { useEffect, useState } from "react";
import apliClient from "../services/apliClient";
import {Text} from "@chakra-ui/react"

interface Game{
    id:number,
    rating:number,
    name:string,
}
interface FetchGamesResponse {
    count:number,
    results:Game[],
}

const GameGrid = () => {
    const[games,setGames] = useState<Game[]>([]);
    const [error,setError] = useState("");

    useEffect(() => {
        apliClient.get("/games").then((res)=>{
            setGames(res.data.results);
        }).catch((error)=>{
            setError(error);
        })
    });
    return(
        <>
        {error && <Text>{error}</Text>}
        <ul>
            {games.map((game)=>{
                return <li key={game.id}>{game.name}</li>
            })}
        </ul>
        </>
    )
}

export default GameGrid;