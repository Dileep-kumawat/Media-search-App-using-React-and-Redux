import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_GIPHY_API_KEY

export const getGifs = async (query, page, perPage) => {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
        params: {
            api_key: ACCESS_KEY,
            q: query,
            offset: page,
            limit: perPage
        }
    });
    const data = response.data.data.map((e) => {
        return {
            id: e.id,
            src: e.images["original"].url,
            type: "gif",
            title: e.alt_text
        }
    });
    return data;
}