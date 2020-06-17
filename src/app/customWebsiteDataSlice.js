import { createSlice } from '@reduxjs/toolkit'
import { BG_IMG_W, BG_IMG_H, MAIN_IMG_W, MAIN_IMG_H } from '../constants'

const customWebsiteDataSlice = createSlice({
  name: 'customWebsiteData',
  initialState: {
    title: 'Instant website',
    subtitle: 'Just add inspiration',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique odio, aut sed non ullam a iste quaerat doloremque adipisci nemo quod blanditiis deleniti necessitatibus unde quidem sit minus in labore?',
    mainImageKeywords: '',
    bgImageKeywords: '',
    mainImageUrl: `https://source.unsplash.com/${MAIN_IMG_W * 2}x${MAIN_IMG_H * 2}/`,
    bgImageUrl: `https://source.unsplash.com/${BG_IMG_W}x${BG_IMG_H}/`,
    isDataBeingEdited: 0
  },
  reducers: {
    titleUpdated: (state, action) => {
      state.title = action.payload
    },
    subtitleUpdated: (state, action) => {
      state.subtitle = action.payload
    },
    descriptionUpdated: (state, action) => {
      state.description = action.payload
    },
    mainImageKeywordsUpdated: (state, action) => {
      state.mainImageKeywords = action.payload
    },
    bgImageKeywordsUpdated: (state, action) => {
      state.bgImageKeywords = action.payload
    },
    bgImageUrlUpdated: (state, action) => {
      state.bgImageUrl = action.payload
    },
    mainImageUrlUpdated: (state, action) => {
      state.mainImageUrl = action.payload
    },
    isDataBeingEditedUpdated: (state, action) => {
      state.isDataBeingEdited = action.payload
    }
  }
})

export const {
  titleUpdated,
  subtitleUpdated,
  descriptionUpdated,
  mainImageKeywordsUpdated,
  bgImageKeywordsUpdated,
  mainImageUrlUpdated,
  bgImageUrlUpdated,
  isDataBeingEditedUpdated
} = customWebsiteDataSlice.actions

function imageSearchUrl(keywords, w, h) {
  return `https://source.unsplash.com/${w}x${h}/?${keywords}`;
}

export const bgImageKeywordsChanged = (value) => (dispatch) => {
  dispatch(bgImageKeywordsUpdated(value))
  dispatch(bgImageUrlUpdated(imageSearchUrl(value, BG_IMG_W, BG_IMG_H)))
}

export const mainImageKeywordsChanged = (value) => (dispatch) => {
  dispatch(mainImageKeywordsUpdated(value))
  dispatch(mainImageUrlUpdated(imageSearchUrl(value, MAIN_IMG_W * 2, MAIN_IMG_H * 2)))
}

export default customWebsiteDataSlice.reducer
