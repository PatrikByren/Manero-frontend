import React from 'react'
import Header from '../components/sections/Header'
import SizeAndColor from '../components/sections/SizeAndColor'
import PriceChecksTags from '../components/sections/PriceChecksTags'
import FilterComponent from '../components/sections/ButtonFilter'

const FilterView = () => {
  return (
    <div className='container'>
      <Header title={"Filter"} icon={"fa-regular fa-chevron-left"} />
      <SizeAndColor />
      <PriceChecksTags />
      <FilterComponent />
      <div className='d-flex justify-content-center align-items-center'>
        <button className='basebtn'>APPLY FILTERS</button>
      </div>
    </div>
  )
}

export default FilterView;