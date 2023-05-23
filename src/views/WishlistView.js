import React from 'react';
import Header from "../components/sections/Header";
import cartproductpic from '../asset/images/cartproductpic.png';

const WishlistView = () => {

    return (
        <div className='container mt-4'>
            <Header icon={"fa-sharp fa-light fa-bars"} title={"Wishlist"} righticon={"fal fa-shopping-bag"} />
            <div className='asdf'>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='row'>
                        <div className='col-4 text-center'>
                            <img src={cartproductpic} alt="asdf" />
                        </div>
                        <div className='col-5 text-center'>
                            <p>Handbag $15.98</p>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <div className='col m-2 text-end'>
                            <i class="fa-light fa-heart"></i>
                            <div className='col md-2'>
                                <i class="fa-thin fa-bag-shopping"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default WishlistView;