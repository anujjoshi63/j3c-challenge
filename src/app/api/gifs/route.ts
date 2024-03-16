export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')
    const offset = searchParams.get('offset')
    const limit = searchParams.get('limit')
    const rating = searchParams.get('rating') as 'g' | 'pg' | 'pg-13' | 'r'
    const GIPHY_API_KEY = process.env.GIPHY_API_KEY;
    type Gif = {
        id: string;
        images: { original: { url: string } };
    };
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=${limit}&offset=${offset}&rating=${rating}&lang=en&bundle=low_bandwidth`;
    const response = await fetch(url);
    const data = await response.json();
    console.log({ data: data.data[0].rating })
    const gifs = data.data.map((gif: Gif) => ({
        id: gif.id,
        url: gif.images.original.url
    }));
    // console.log(gifs)
    return Response.json({ gifs })
}