import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDoubleDown, BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform'
import { Platform } from '../hooks/useGames'
import { GameQuery } from '../App'

interface SortSelectorProps{
    
    onSelectSortOrder: (sortOrder:String) => void,
    gameQuery:GameQuery,
}

const SortSelector = ({onSelectSortOrder,gameQuery}:SortSelectorProps) => {
 
    const sortOrders = [ 
        {value:'',label:'Relevance'},
        {value: '-added',label:'Name'},
        {value:'name',label:'Release date'},
        { value:'-released', label:'Release date'},
        {value:'-metacritic',label:'Populalarity'},
        {value:'-rating',label:'Average rating'},
    ]

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>} > Sort Order</MenuButton>
        <MenuList> 
            {sortOrders.map(sortOrder => <MenuItem onClick={()=>{ onSelectSortOrder(sortOrder.value)}} key={sortOrder.label}>{sortOrder.label}</MenuItem> )}
        </MenuList>
    </Menu>
  )
}

export default SortSelector