'use client';
import GifsList from '@/components/GifsList';
import SearchBarInputs from '@/components/SearchBarInputs';
import { LIMIT } from '@/utils/constants';
import { getGifsFromGiphy } from '@/utils/helpers';
import { Gif } from '@/utils/types';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
	const [gifs, setGifs] = useState<Gif[]>([]);
	const [query, setQuery] = useState('');
	const [offset, setOffset] = useState(0);
	const handleShowMore = async () => {
		await getGifsFromGiphy(query, offset + LIMIT, setGifs);
		setOffset(old => old + LIMIT);
	};
	return (
		<div className={styles.main}>
			<SearchBarInputs
				setGifs={setGifs}
				query={query}
				setQuery={setQuery}
				offset={offset}
			/>
			<GifsList gifs={gifs} handleShowMore={handleShowMore} />
		</div>
	);
}
