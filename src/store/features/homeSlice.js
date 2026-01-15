import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getImages } from '../../apis/imagesApi'
import { getVideos } from '../../apis/videosApi'
import { getGifs } from '../../apis/gifApi'

export const fetchData = createAsyncThunk(
    "home/fetchData",
    async (_, { getState }) => {
        const { query, currentTab } = getState().homeSlice;

        if (currentTab === "images") {
            return await getImages(query, 1, 20);
        }
        if (currentTab === "videos") {
            return await getVideos(query, 1, 20);
        }
        if (currentTab === "gifs") {
            return await getGifs(query, 1, 20);
        }
    }
);

const homeSlice = createSlice({
    name: "home",
    initialState: {
        data: [],
        query: "",
        currentTab: "images",
        loading: false,
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload;
        },
        setCurrentTab(state, action) {
            state.currentTab = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchData.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default homeSlice.reducer;
export const { setQuery, setCurrentTab } = homeSlice.actions;