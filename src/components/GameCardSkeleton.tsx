import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
  return (
    <Card  overflow={"hidden"} borderRadius={"10px"}>
    <Skeleton height={"200px"}></Skeleton>
    <CardBody>
        <SkeletonText></SkeletonText>
    </CardBody>
    </Card>
    

  )
}

export default GameCardSkeleton;