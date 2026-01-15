import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

export const getImages = async (query, page, perPage) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`
        },
        params: {
            query,
            page,
            per_page: perPage
        }
    });
    const data = response.data.results.map((e)=>{
        return {
            id : e.id,
            title : e.alt_description,
            src : e.urls.regular,
            type : "image",
        };
    })
    return data;
}