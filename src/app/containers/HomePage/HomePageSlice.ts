import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     animeList: [],
}

//  a slice is a like a reducer plus action & state
const HomePageSlice = createSlice({
     name: "homePage",
     initialState,
     reducers: {

     }
})

export const { } = HomePageSlice.actions
export default HomePageSlice.reducer