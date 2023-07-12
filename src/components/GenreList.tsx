import React from 'react'
import useCategory, { Genre } from '../hooks/useCategory'
import useGames from '../hooks/useGames';
import useData from '../hooks/useData';
import { HStack, List, ListIcon, ListItem,Image, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/getCroppedImageUrl';

const GenreList = () => {
    const {data,error,isLoading} = useCategory();
  return (
    <List>
        {data.map(genre =><ListItem key={genre.id} paddingY={'5px'}><HStack><Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} ></Image> <Text fontSize={'lg'}>{genre.name}</Text></HStack></ListItem> )}
    </List>
  )
}

export default GenreList;