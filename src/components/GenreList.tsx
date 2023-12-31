import React from 'react'
import useCategory, { Genre } from '../hooks/useCategory'
import useGames from '../hooks/useGames';
import useData from '../hooks/useData';
import { HStack, List, ListIcon, ListItem,Image, Text, Button, Heading } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/getCroppedImageUrl';

interface GenreListProps{
  onSelectGenre: (genre:Genre) => void,
  selectedGenre : Genre | null,
}

const GenreList = ({onSelectGenre,selectedGenre}:GenreListProps) => {
    const {data,error,isLoading} = useCategory();
  return (
    <>
    <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
    <List>
        {data.map(genre =><ListItem key={genre.id} paddingY={'5px'}><HStack><Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} ></Image> <Button backgroundColor={'transparent'} whiteSpace={'normal'} textAlign={'left'} fontWeight={genre.id === selectedGenre?.id ? 'bold':'normal'}  onClick={() => onSelectGenre(genre)} fontSize={'lg'}>{genre.name}</Button></HStack></ListItem> )}
    </List>
    </>
  )
}

export default GenreList;