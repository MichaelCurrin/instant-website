/* eslint-disable no-unused-vars */

// Even if you fork this repo, please leave use URL as is to link back to the original repo.
// This is used on the frontend as the link back to the Github repo.
const REPO_URL = 'https://github.com/MichaelCurrin/instant-website';
// But this can be changed if you like.
const PROJECT_TITLE = 'Instant Website';

const MAIN_IMG_W = 128,
    MAIN_IMG_H = 128;

// Based on slightly larger than a Mac Pro laptop screen.
const BG_IMG_W = 1600,
    BG_IMG_H = 1000;

// Used to brand the homepage as this project. Used for display purposes only and not in the editor.
const MAIN_PAGE_DISPLAY_DEFAULTS = {
    title: 'Instant website',
    subtitle: 'Just add inspiration',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique odio, aut sed non ullam a iste quaerat doloremque adipisci nemo quod blanditiis deleniti necessitatibus unde quidem sit minus in labore?'
};

const imageData = require('./imageData');
const IMAGE_SEARCH_OPTIONS = imageData.keyword_searches;

module.exports = {
    REPO_URL,
    PROJECT_TITLE,
    MAIN_IMG_W,
    MAIN_IMG_H,
    BG_IMG_W,
    BG_IMG_H,
    MAIN_PAGE_DISPLAY_DEFAULTS,
    IMAGE_SEARCH_OPTIONS
};
