'use client';
import { getGifsFromGiphy } from '@/utils/helpers';
import type { FilterType, Gif } from '@/utils/types';
import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Dispatch, SetStateAction, useState } from 'react';
import FancyButton from '../FancyButton';
import './styles.css';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#a374ff'
		}
	}
});

export default function SearchBarInputs({
	setGifs,
	query,
	setQuery,
	offset
}: {
	setGifs: Dispatch<SetStateAction<Gif[]>>;
	query: string;
	setQuery: Dispatch<SetStateAction<string>>;
	offset: number;
}) {
	const [filter, setFilter] = useState<FilterType>('g');
	const handleChangeFilter = (
		e: SelectChangeEvent<'g' | 'r' | 'pg' | 'pg-13'>
	) => {
		const newFilter = e.target.value.toLowerCase() as FilterType;
		setFilter(newFilter);
		if (query !== '') {
			getGifsFromGiphy(query, 0, setGifs, newFilter, true);
		}
	};
	const handleSearchGifs = async () => {
		setGifs([]);
		await getGifsFromGiphy(query, offset, setGifs, filter);
	};
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<div className="searchBar">
				<form
					action="#"
					onSubmit={e => {
						e.preventDefault();
						handleSearchGifs();
					}}
				>
					<TextField
						id="outlined-basic"
						label="Search for GIFs"
						variant="outlined"
						type="search"
						value={query}
						onChange={e => {
							setQuery(e.target.value);
							setGifs([]);
						}}
						className="textField"
					/>
					<FancyButton
						handleSearchGifs={handleSearchGifs}
						disabled={query === ''}
					/>
					{/* Search */}
					<Select
						value={filter}
						label="Filter"
						onChange={handleChangeFilter}
					>
						{['G', 'PG', 'PG-13', 'R'].map(rating => (
							<MenuItem key={rating} value={rating.toLowerCase()}>
								{rating}
							</MenuItem>
						))}
					</Select>
				</form>
			</div>
		</ThemeProvider>
	);
}
