import React from 'react'
import MovingText from 'react-moving-text'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Hero = () => {
    return (
        <div>            
            <div class="hero">      
                <div class="hero-text hero-1">   
                    <h1>
                        <span data-aos="fade-right"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-out-cubic" class="animated">Explore</span> 
                        <span data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-out-cubic" class="red">.</span> 
                        <span data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-out-cubic">Dream</span>
                        <span data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-out-cubic" class="red">.</span> 
                        <span data-aos="fade-right"
                            data-aos-delay="550"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-out-cubic">Discover</span>                            
                        <span data-aos="fade-right"
                            data-aos-delay="550"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-out-cubic" class="red">.</span>
                    </h1>
                </div>
            </div>  

            <div class="separator" data-aos="fade-up"
                                data-aos-duration="600"
                                data-aos-easing="ease-out">
                <p><span class="red">Twenty</span> years from now, you will be more disappointed by the things you didn't do than those you did. </p>
                <p><span class="red">So</span> throw off the bowlines.
                <span class="red"> Sail</span> away from safe harbor. <span class="red">Catch</span> the wind in your sails. </p>
            </div>
        </div>
    )
}

export default Hero
