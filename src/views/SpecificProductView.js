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
            <div className='highlvlstyling'>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span>(23)</span>
                <p>$37.88</p>
            </div>
            <div>
                <SizeAndColor />
            </div>
            <div className='proddescrip'>
                Description
                <p className='insideproddescrip'>Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button className='basebtn'>+ ADD TO CART</button>
            </div>
            <div className='proddes'>
                <p>Reviews (23)</p>
                <p>View All <i className="fa-solid fa-chevron-right"></i></p>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='highlvlstyling2'>
                    <p>Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.</p>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='highlvlstyling2'>
                    <p>Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.</p>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                </div>
            </div>
        </div>
    )
}

export default SpecificProductView;