import React from 'react';
import Header from '../../components/sections/Header';
import Showcase from '../../components/sections/Showcase';
import SizeAndColor from '../../components/sections/SizeAndColor'

const SpecificProductView = () => {
    return (
        <div className='container'>
            <Header icon={"fa-sharp fa-light fa-bars"} title={"MANERO"} righticon={"fal fa-shopping-bag"} />
            <Showcase />
            <SizeAndColor />
        </div>
    )
}

export default SpecificProductView;