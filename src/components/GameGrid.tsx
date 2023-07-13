import { useEffect, useState } from "react";
import apliClient from "../services/apliClient";
import {SimpleGrid, Text} from "@chakra-ui/react"
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useCategory";
interface GameGridProps{
selectedGenre:Genre |null,
}

const GameGrid = ({selectedGenre}:GameGridProps) => {
const {data,error,isLoading} = useGames(selectedGenre);
const skeletons = [1,2,3,4,5,6]
    return(
        <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}} padding="10px" spacing={5}>
        {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}></GameCardSkeleton>)} 
            {data.map((game)=>{
                return <GameCard key={game.id} game={game}></GameCard>
            })}
        </SimpleGrid>
        </>
    )
}

export default GameGrid;