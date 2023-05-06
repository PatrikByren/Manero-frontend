import React from 'react'
import Header from '../components/sections/Header'
import SizeAndColor from '../components/sections/SizeAndColor'
import PriceChecksTags from '../components/sections/PriceChecksTags'

const FilterView = () => {
  return (
    <>
    <Header title={"Filter"} icon={"fa-regular fa-chevron-left"}/>
    <SizeAndColor/>
    <PriceChecksTags/>
    </>
  )
}

export default FilterView