import React from 'react'
import { GameQuery } from '../App'
import { Heading } from '@chakra-ui/react'
interface GameHeadingProps
{
  gameQuery: GameQuery  
}

const GameHeading = ({gameQuery}:GameHeadingProps) => {
  return (
    <Heading >{gameQuery.platform?.name  } {gameQuery.genre?.name} Games</Heading>
  )
}

export default GameHeading