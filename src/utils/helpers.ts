import { Dispatch, SetStateAction } from "react";
import { LIMIT } from "./constants";
import { FilterType, Gif } from "./types";

const getGifsFromGiphy = async (
    query: string,
    offset: number,
    setGifs: Dispatch<SetStateAction<Gif[]>>,
    filter: FilterType = 'g',
    reset: boolean = false
) => {
    const url = `/api/gifs?query=${query}&offset=${offset}&limit=${LIMIT}&rating=${filter}`;
    try {
        const response = await fetch(url);
        const gifsData = await response.json();
        // console.log(gifsData);
        if (reset) setGifs(gifsData.gifs);
        else if (offset === 0) setGifs(gifsData.gifs);
        else setGifs((old: Gif[]) => [...old, ...gifsData.gifs]);
    } catch (e) {
        alert('Error fetching data');
    }
};

export { getGifsFromGiphy };