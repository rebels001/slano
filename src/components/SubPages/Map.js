import React from 'react';
import Lightbox, { SRLWrapper } from 'simple-react-lightbox';

const Map = ({ map }) => {
	console.log(map, "map");
	return (
		<Lightbox>
			<img src={map.map} className="map big-map" alt={map.alt} />

			<SRLWrapper>
				<a className="image-link small-map" href={map.smallMapNew} data-lightbox="example-set">
					<img src={map.openMap} className="map" alt={map.alt} />
				</a>
			</SRLWrapper>
		</Lightbox>
	);
};

export default Map;
