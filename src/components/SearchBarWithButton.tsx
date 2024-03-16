'use client';
import { Button, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import styles from './SearchBarWithButton.module.css';
type Gif = {
	id: string;
	images: { original: { url: string } };
};
type FilterType = 'g' | 'pg' | 'pg-13' | 'r';
const LIMIT = 9;

const getGifsFromGiphy = async (
	query: string,
	offset: number,
	setGifs: Function,
	filter: FilterType = 'g',
	reset: boolean = false
) => {
	const url = `/api/gifs?query=${query}&offset=${offset}&limit=${LIMIT}&rating=${filter}`;
	try {
		const response = await fetch(url);
		const gifsData = await response.json();
		console.log(gifsData);
		if (reset) setGifs(gifsData.gifs);
		else if (offset === 0) setGifs(gifsData.gifs);
		else setGifs((old: Gif[]) => [...old, ...gifsData.gifs]);
	} catch (e) {
		alert('Error fetching data');
	}
};
export default function SearchBarWithButton() {
	const [query, setQuery] = useState('');
	const [gifs, setGifs] = useState<{ id: string; url: string }[]>([]);
	const [offset, setOffset] = useState(0);
	const [filter, setFilter] = useState<'g' | 'pg' | 'pg-13' | 'r'>('g');
	return (
		<div>
			<div className={styles.searchBar}>
				<TextField
					id="outlined-basic"
					label="Search for GIFs"
					variant="filled"
					type="search"
					value={query}
					onChange={e => {
						setQuery(e.target.value);
						setGifs([]);
					}}
					className={styles.textField}
				/>
				<Button
					disabled={query === ''}
					variant="contained"
					sx={{ borderRadius: 20 }}
					onClick={async () => {
						setGifs([]);
						await getGifsFromGiphy(query, offset, setGifs, filter);
					}}
				>
					Search
				</Button>
				<Select
					value={filter}
					label="Filter"
					onChange={async e => {
						setFilter(e.target.value.toLowerCase() as FilterType);
						await getGifsFromGiphy(query, 0, setGifs, filter, true);
					}}
				>
					{['G', 'PG', 'PG-13', 'R'].map(rating => (
						<MenuItem key={rating} value={rating.toLowerCase()}>
							{rating}
						</MenuItem>
					))}
				</Select>
			</div>
			<div></div>
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
						onClick={async () => {
							await getGifsFromGiphy(
								query,
								offset + LIMIT,
								setGifs
							);
							setOffset(old => old + LIMIT);
						}}
					>
						Show more
					</Button>
				</div>
			)}
		</div>
	);
}
