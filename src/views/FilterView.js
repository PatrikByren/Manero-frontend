import React from 'react'
import Header from '../components/sections/Header'
import SizeAndColor from '../components/sections/SizeAndColor'

const FilterView = () => {
  return (
    <>
    <Header title={"Filter"} icon={"fa-regular fa-chevron-left"}/>
    <SizeAndColor/>
    </>
  )
}

export default FilterView