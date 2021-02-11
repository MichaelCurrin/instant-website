/* eslint-disable no-unused-vars */

// Even if you fork this repo, please leave use URL as is to link back to the original repo.
// This is used on the frontend as the link back to the Github repo.
export const REPO_URL = "https://github.com/MichaelCurrin/instant-website";
// But this can be changed if you like.
export const PROJECT_TITLE = "Instant Website";

export const MAIN_IMG_W = 128;
export const MAIN_IMG_H = 128;

// Based on slightly larger than a Mac Pro laptop screen.
export const BG_IMG_W = 1600;
export const BG_IMG_H = 1000;

// Used to brand the page if not form values are set.
export const MAIN_PAGE_DISPLAY_DEFAULTS = {
  title: "Instant website",
  subtitle: "Just add inspiration",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique odio, aut sed non ullam a iste quaerat doloremque adipisci nemo quod blanditiis deleniti necessitatibus unde quidem sit minus in labore?",
};

// Display overrides and form values.
export const MAIN_PAGE_DEFAULT_PROPS = {
  title: "",
  subtitle: "",
  description: "",
  mainImage: "",
  bgImage: "",
  showForm: true,
};
