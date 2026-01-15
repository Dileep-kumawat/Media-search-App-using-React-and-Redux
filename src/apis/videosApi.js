import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_PEXELS_API_KEY

export const getVideos = async (query, page, perPage) => {
    const response = await axios.get(`https://api.pexels.com/videos/search`, {
        headers: {
            Authorization: ACCESS_KEY
        },
        params: {
            query,
            page,
            per_page: perPage
        }
    });
    const data = response.data.videos.map((e) => {
        return {
            id: e.id,
            src: e.video_files[0].link,
            title: e.user.name,
            type: "video"
        }
    })
    return data;
}