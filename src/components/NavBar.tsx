import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface NavBarProps{
  onSearchText: ( seatchText:string) => void;
}

const NavBar = ({onSearchText} : NavBarProps ) => {
  return (
    <HStack  padding='10px'>
      <Image src={logo} boxSize='60px' />
      <SearchInput onSearchText = {onSearchText}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
      
    </HStack>
  )
}

export default NavBar