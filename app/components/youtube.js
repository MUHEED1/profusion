import React from 'react'
import Ytcards from './ytcards'
import Padding from './padding'

const Youtube = () => {
  return (
    <Padding className='py-[6rem] grid grid-cols-4 gap-7'>
      <Ytcards src={"/images/ad3.jpg"} Heading={"Grocery shopping list"}/>
      <Ytcards src={"/images/ad4.jpg"} Heading={"Fantasy Cricket game"}/>
      <Ytcards src={"/images/ad1.jpg"} Heading={"Variables in python"}/>
      <Ytcards src={"/images/ad2.jpg"} Heading={"SQL Masterclass"}/>
    </Padding>
  )
}

export default Youtube
