import React from 'react'
import AOS from 'aos'
AOS.init({
	useClassNames: true,
	initClassName: false,
	animatedClassName: 'animated',
	easing: 'ease-in-out-cubic',
	duration: 1300
});

const Content = ({ content }) => {	
	return (
		<div>
			<div className={content.heroClass} />

			<div className="wrapper">
				<div className="title">
					<h1 className={content.class}>{content.header}</h1>
				</div>

				<div className="flex animated" data-aos="fade-top">
					<div className="description">
						<h2>{content.title}</h2>
						<span className="line" />
						<p>
							{content.firstP} <a href={content.link}>{content.linkP}</a> {content.secondP}
						</p>
						<p>{content.thirdP}</p>
						<p>{content.fourthP}</p>
						<p>{content.fifthP}</p>
					</div>

					<div className="info">
						<h2>Departure time:</h2>
						<h2>Arrival time:</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
