import { getGifsFromGiphy } from '@/utils/helpers';
import { FilterType, Gif } from '@/utils/types';
import { Dispatch, SetStateAction } from 'react';

const FancyButton = ({
	handleSearchGifs,
	disabled
}: {
	handleSearchGifs: () => void;
	disabled: boolean;
}) => {
	return (
		<button
			className="button button-outlined"
			data-button-svg=""
			disabled={disabled}
			onClick={handleSearchGifs}
		>
			<span className="button-inner">
				<span className="button-inner-static">Search GIFs</span>
				<span className="button-inner-hover">Search GIFs</span>
			</span>
			<span>
				<svg
					className="button-outlined-bg"
					enable-background="new 0 0 155.66101694915255 56"
					viewBox="0 0 155.66101694915255 56"
					xmlns="http://www.w3.org/2000/svg"
				>
					<clipPath id="buttonSvg">
						<path
							className="button-stroke"
							d="m127.66101694915255 1c14.9 0 27 12.1 27 27s-12.1 27-27 27h-99.66101694915255c-14.9 0-27-12.1-27-27s12.1-27 27-27zm0-1h-99.66101694915255c-15.5 0-28 12.5-28 28 0 15.5 12.5 28 28 28h99.66101694915255c15.5 0 28-12.5 28-28 0-15.5-12.5-28-28-28z"
						></path>
					</clipPath>
					<g clip-path="url(#buttonSvg)">
						<g className="button-circles">
							<g className="button-circles-o">
								<circle
									pathLength="1"
									className="button-circle circle-1"
									stroke-width="155.66101694915255"
									cx="77.83050847457628"
									cy="28"
									r="77.83050847457628"
								></circle>
								<circle
									pathLength="1"
									className="button-circle circle-2"
									stroke-width="155.66101694915255"
									cx="77.83050847457628"
									cy="28"
									r="77.83050847457628"
								></circle>
								<circle
									pathLength="1"
									className="button-circle circle-3"
									stroke-width="155.66101694915255"
									cx="77.83050847457628"
									cy="28"
									r="77.83050847457628"
								></circle>
								<circle
									pathLength="1"
									className="button-circle circle-4"
									stroke-width="155.66101694915255"
									cx="77.83050847457628"
									cy="28"
									r="77.83050847457628"
								></circle>
							</g>
							<circle
								pathLength="1"
								className="button-circle -hover"
								stroke-width="155.66101694915255"
								cx="77.83050847457628"
								cy="28"
								r="77.83050847457628"
							></circle>
						</g>
					</g>
				</svg>
			</span>
		</button>
	);
};

export default FancyButton;
