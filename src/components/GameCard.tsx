import { Game } from "../hooks/useGames";
import {Card,CardBody,HStack,Heading,Image,Text} from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface GameCardProps {
    game:Game,
}

const GameCard = ({game}:GameCardProps) =>{
    return(
        <Card overflow={"hidden"} borderRadius={"10px"}>
            <Image  src={game.background_image}>

            </Image>
            <CardBody>
                <Heading fontSize={"2xl"}>{game.name}</Heading>
                <HStack justifyContent={"space-between"}>
               <PlatformIconList platforms={game.parent_platforms.map((platform)=>platform.platform)}></PlatformIconList>
                <CriticScore score={game.metacritic}></CriticScore>
               </HStack>
            </CardBody>
            
        </Card>
    )

}

export default GameCard;