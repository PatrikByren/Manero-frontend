import React from 'react';
import Header from '../components/sections/Header';
import Showcase from '../components/sections/Showcase';
import SizeAndColor from '../components/sections/SizeAndColor'

const SpecificProductView = () => {
    return (
        <div className='container'>
            <div>
                <Header icon={"fa-solid fa-chevron-left"} title={"MANERO"} righticon={"fal fa-shopping-bag"} />
                <Showcase />
            </div>
            <div className='proddes'>
                <p>Knitted summer top</p>
                <i class="fa-thin fa-heart"></i>
            </div>
            <div>
                <SizeAndColor />
            </div>
        </div>
    )
}

export default SpecificProductView;