import React from 'react';
import Header from "../components/sections/Header";
import cartproductpic from '../asset/images/cartproductpic.png';
import Menubar from '../components/sections/MenuBar';

const WishlistView = () => {

    return (
        <div className='container'>
            <div className='mt-4'>
                <Header icon={"fa-sharp fa-light fa-bars"} title={"Wishlist"} righticon={"fal fa-shopping-bag"} />
                <div className='row'>
                    <div className='col text-start'>
                        <img src={cartproductpic} alt="asdf" />
                    </div>
                    <div className='col text-center'>
                        <p>Handbag $15.98</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <div className='col text-end'>
                        <i class="fa-light fa-heart"></i>
                        <div className='col md-2'>
                            <i class="fa-thin fa-bag-shopping"></i>
                        </div>
                    </div>
                </div>
                <div class="flex-grow-1 border-top border-2 my-3"></div>
                <div className='row'>
                    <div className='col text-start'>
                        <img src={cartproductpic} alt="asdf" />
                    </div>
                    <div className='col text-center'>
                        <p>Handbag $15.98</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <div className='col text-end'>
                        <i class="fa-light fa-heart"></i>
                        <div className='col md-2'>
                            <i class="fa-thin fa-bag-shopping"></i>
                        </div>
                    </div>
                </div>
                <div class="flex-grow-1 border-top border-2 my-3"></div>
                <div className='row'>
                    <div className='col text-start'>
                        <img src={cartproductpic} alt="asdf" />
                    </div>
                    <div className='col text-center'>
                        <p>Handbag $15.98</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <div className='col text-end'>
                        <i class="fa-light fa-heart"></i>
                        <div className='col md-2'>
                            <i class="fa-thin fa-bag-shopping"></i>
                        </div>
                    </div>
                </div>
                <div class="flex-grow-1 border-top border-2 my-3"></div>
                <div className='row'>
                    <div className='col text-start'>
                        <img src={cartproductpic} alt="asdf" />
                    </div>
                    <div className='col text-center'>
                        <p>Handbag $15.98</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <div className='col text-end'>
                        <i class="fa-light fa-heart"></i>
                        <div className='col md-2'>
                            <i class="fa-thin fa-bag-shopping"></i>
                        </div>
                    </div>
                </div>
                <div class="flex-grow-1 border-top border-2 my-3"></div>
                <div className='row mt-3'>
                    <div className='col text-start'>
                        <img src={cartproductpic} alt="asdf" />
                    </div>
                    <div className='col text-center'>
                        <p>Handbag $15.98</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <div className='col text-end'>
                        <i class="fa-light fa-heart"></i>
                        <div className='col md-2'>
                            <i class="fa-thin fa-bag-shopping"></i>
                        </div>
                    </div>
                </div>
                <div class="flex-grow-1 border-top border-2 my-3"></div>
            </div>
            <Menubar />
        </div>
    );

};

export default WishlistView;