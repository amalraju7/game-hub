import { useState } from 'react'

import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';


import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { Genre } from './hooks/useCategory';
import PlatformMenu from './components/PlatformMenu';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery{
  genre:Genre | null,
  platform: Platform | null,
  sortOrder:String | null,
  searchText: String | null,
}


function App() {

  const[gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery);
  

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }} templateColumns={{
        base: '1fr 1fr',
      lg: '200px 1fr'      }}
    >
      <GridItem area="nav">
        <NavBar  onSearchText={(searchText) => setGameQuery({...gameQuery,searchText})} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
       <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=> setGameQuery({...gameQuery,genre})}></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main" >
        <Box padding={3}>
      <GameHeading  gameQuery={gameQuery}></GameHeading>
      </Box>
        <HStack padding={3}>
       
        <PlatformMenu selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery,platform})}></PlatformMenu>
        <SortSelector gameQuery={gameQuery} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery,sortOrder})} ></SortSelector>
        </HStack>
      <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;