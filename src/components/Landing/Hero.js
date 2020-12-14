import React, { Fragment } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
	useClassNames: true,
	initClassName: false,
	animatedClassName: 'animated',
	easing: 'ease-in-out-cubic',
	duration: 2000
});

const Hero = () => {
	return (
		<Fragment>
			<div className="hero">
				<div className="hero-text hero-1">
					<h1>
						<span data-aos="fade-right" className="animated">
							Explore
						</span>
						<span data-aos="fade-right" data-aos-delay="50" className="red animated">
							.
						</span>
                        <br className="break" />
						<span data-aos="fade-right" data-aos-delay="300" className="animated">
							Dream
						</span>
						<span data-aos="fade-right" data-aos-delay="300" className="red animated">
							.
						</span>
                        <br className="break"/>
						<span data-aos="fade-right" data-aos-delay="550" className="animated">
							Discover
						</span>
						<span data-aos="fade-right" data-aos-delay="550" className="red animated">
							.
						</span>
					</h1>
				</div>
			</div>

			<div className="separator" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out">
				<p>
					<span className="red">Twenty</span> years from now, you will be more disappointed by the things you
					didn't do than those you did.
				</p>
				<p>
					<span className="red">So</span> throw off the bowlines.
					<span className="red"> Sail</span> away from safe harbor. <span className="red">Catch</span> the
					wind in your sails.
				</p>
			</div>
		</Fragment>
	);
};

export default Hero;
