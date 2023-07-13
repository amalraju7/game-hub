import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDoubleDown, BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform'
import { Platform } from '../hooks/useGames'

interface PlatformMenuProps{
    onSelectPlatform: (platform:Platform)=> void,
    selectedPlatform: Platform | null

}

const PlatformMenu = ({onSelectPlatform,selectedPlatform}:PlatformMenuProps) => {
    const {data,error,isLoading} = usePlatform();

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>} > {selectedPlatform ? selectedPlatform.name : "Platform"}</MenuButton>
        <MenuList>
            {data.map(platform => <MenuItem onClick={()=>{ onSelectPlatform(platform)}} key={platform.id}>{platform.name}</MenuItem> )}
        </MenuList>
    </Menu>
  )
}

export default PlatformMenu