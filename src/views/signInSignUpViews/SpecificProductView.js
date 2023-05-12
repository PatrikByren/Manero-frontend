import React from 'react';
import card1 from "../../asset/images/card1.png";

const SpecificProductView = () => {
    return (
        <section className='heroprodukt'>
            <div className="heroprodcontain">
                <div className="firstprodsect">
                    <picture>
                        <img src={card1} alt="lul" />
                    </picture>
                </div>
                <div className="prodcontent">
                    <div className="titles">
                        <p className="prodp">Young Star Smart Shoe in Fashion</p>
                        <p className="prodp2">Lirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et
                            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                            Lorem ipsum dolor sit amet.
                        </p>
                        <p>starstarstar 16 reviews</p>
                        <p>30 DOLLARES</p>
                        <button>add to cart</button>
                        <p>SKU N/A</p>
                        <p>Add to wishlist</p>
                        <p>Category: Apple Watch Lamp Wow Poggers</p>
                    </div>
                </div>
                <div className="prodknappar">
                    <button>description</button>
                    <button>additional info</button>
                    <button>reviews</button>
                    <button>shipping & delivery</button>
                    <button>design</button>
                </div>
                <div className="prodalotoftext">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et cusam et justo duo
                    dolores et ea rebum. Stet clita kasd <br></br>
                    gubergren, no sea takimata santus est Lorem ipsum dolor sit amet. Lorem ipsum dolor.
                    accusantium laborum pretium hic excepturi harum repellat facilisis convallis potenti, adipiscing lectus
                    aliqua.
                    Asperiores repudiandae ipsam error erat, accusamus, cum taciti unde?
                    Praesentium, pariatur, tempora consequuntur purus sapiente, iaculis vitae consequatur, rhoncus earum
                    eleifend,
                    <br></br>
                    hendrerit ipsum rhoncus ex error, impedit! Alias laboris sequi curae aptent? Eu sagittis eu, distinctio
                    tortor?
                    Dapibus delectus! Consequuntur luctus.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et
                    dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et cusam et justo duo dolores et ea rebum. Stet
                    clita
                    kasd
                    gubergren, no sea takimata santus est Lorem ipsum dolor sit amet. Lorem ipsum dolor.
                </div>
            </div>
        </section>

    )
}

export default SpecificProductView;