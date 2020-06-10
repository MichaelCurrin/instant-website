# Instant website 🏭 ⌛ 🧙‍♂️
> The fastest way to make and share a landing page

[![Netlify Status](https://api.netlify.com/api/v1/badges/8f1fc5a5-1b67-4d14-94c6-512c4eacdad7/deploy-status)](https://app.netlify.com/sites/instant-website/deploys)
[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/instant-website.svg)](https://GitHub.com/MichaelCurrin/instant-website/tags/)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/MichaelCurrin/instant-website/blob/master/LICENSE)

[![Made with NodeJS](https://img.shields.io/badge/Made%20with-Node-blue.svg)](https://nodejs.org)
[![Made with React-URL-Query](https://img.shields.io/badge/Made%20with-React%20URL%20Query-blue.svg)](https://www.npmjs.com/package/react-url-query)
[![Made with Bulma](https://img.shields.io/badge/Made%20with-Bulma-blue.svg)](https://bulma.io/)


## Project website

[![Site link](https://img.shields.io/badge/site-Instant_Website-green?style=for-the-badge)](https://instant-website.netlify.app/)


## Purpose

A simple online tool to prototype what a real or fictional app/business/organization's webpage could look like - within the framework of a clean, responsibe one-page landing page template. Go wild with authentic or unlikely combinations of words and multiple images.

<!--
Generate a custom landing page using form input. Nothing is persisted - your page lives only in the URL which is shareable.

Manifest a real or imaginary business/product/tool as a simple one-page webpage. Enter your custom text and enter some image keywords. No coding needed.
-->

## About the tool

### Features

- A dynamic website based on your choices.
- Start with a clean one-page landing page template.
- Customize the content and styling
    - Use the form. Your custom values are pushed to the address bar.
    - Or change values in the address bar and press enter. This gives more control such as picking an image keyword not in the droplists. (This also means all image choices are backwards-compatible, in case the droplist choices are changed.)
- While you can't save your page, you can share your URL so someone else can see what you see.


### Limitations

This is a hobby project for me and users so meant more for fun and experimentation than serious use.

- The URL ends up being very long unless you use tinyurl.com or bit.ly to make a short URL.
- The URL is always on the same host domain.
- Images are randomized based on they keyword - you will get a different image on each page refresh and the image may not be what you expected. However, the  unexpected results random images from a search is meant to be part of the charm of the site.


## How do I use the tool?

1. Use the form to customize the fields like title and background image.
2. You will get a URL with your custom values in the [query parameters](https://github.com/MichaelCurrin/learn-to-code/blob/master/en/topics/web_dev/HTML/url_query_parameters.md).
3. Use the URL to view a dynamic webpage that shows text and images based on the parameters.
4. Share the URL with others.

Note that no data is stored in on the server - the website exists only as the URL that you share.


## Documentation

See the [docs](/docs) for more details and instructions on how to setup locally or on a remote environment.
