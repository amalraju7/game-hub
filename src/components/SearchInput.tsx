import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
interface SearchInputProps{
  onSearchText: ( seatchText:string) => void;
}


const SearchInput = ({onSearchText}: SearchInputProps) => {
    const ref = useRef<HTMLInputElement>(null);
  return (
    <form style={{width:'100%'}} onSubmit={(event)=>{
        event.preventDefault();
        if(ref.current) onSearchText(ref.current.value);
    }}>
        <InputGroup>
        <InputLeftElement children={<BsSearch></BsSearch>}></InputLeftElement>
        <Input ref={ref} borderRadius={20} placeholder='Search games...' variant={'filled'}  >
        </Input>
        </InputGroup>
    </form>
  )
}

export default SearchInput