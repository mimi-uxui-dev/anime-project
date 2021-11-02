import { createSelector } from "reselect"

const selectHomePage = (state: any) => state.hopePage

// (homePage) the whole page => homePage.animePage then we grab the small part we need 
export const makeSelectAnimePage = createSelector(selectHomePage, (homePage) => homePage.animePage)