'use client';
import { Gif } from '@/utils/types';
import { Button } from '@mui/material';
import styles from './GifsList.module.css';
const GifsList = ({
	gifs,
	handleShowMore
}: {
	gifs: Gif[];
	handleShowMore: Function;
}) => {
	return (
		<div>
			<div className={styles.gifsContainer}>
				{gifs.map(gif => (
					<img
						key={gif.id}
						src={gif.url}
						alt={gif.id}
						className={styles.gif}
					/>
				))}
			</div>
			<div>
				{gifs.length > 0 && (
					<div
						style={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Button
							variant="contained"
							sx={{ marginY: 3 }}
							onClick={() => handleShowMore()}
						>
							Show more
						</Button>
					</div>
				)}
			</div>
		</div>
	);
};

export default GifsList;
