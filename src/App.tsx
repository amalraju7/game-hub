import { useState } from 'react'

import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
 

  return (
    <Grid templateAreas={{base:`"nav main"`,lg:`"nav nav" "main aside"`, }}>
      <GridItem area="nav" bg="blue">Nav</GridItem>
      <GridItem area="main" bg="red">Main</GridItem>
     
      <Show above="lg">
      <GridItem area="aside" bg="black">Aside</GridItem>
      </Show>
 
    </Grid>
  );
}

export default App
