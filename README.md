# Instant website
> Manifest a business idea as a simple webpage - using custom text and images supplied in a URL and no coding.

[![Netlify Status](https://api.netlify.com/api/v1/badges/8f1fc5a5-1b67-4d14-94c6-512c4eacdad7/deploy-status)](https://app.netlify.com/sites/instant-website/deploys)
[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/instant-website.svg)](https://GitHub.com/MichaelCurrin/instant-website/tags/)
[![Made with Node](https://img.shields.io/badge/Made%20with-Node-blue.svg)](https://nodejs.org)
[![Made with React-URL-Query](https://img.shields.io/badge/Made%20with-React%20URL%20Query-blue.svg)](https://www.npmjs.com/package/react-url-query)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/MichaelCurrin/instant-website/blob/master/LICENSE)

Great for prototyping how a real or fictional business webpage could look like, within the framework of a one-page landing page template.


## Features


- A dynamic website based on your choices.
- Start with a clean one-page landing page template.
- Customize the content and styling
    - Use a form. Custom values are pushed to the address bar.
    - Or change values in the address bar and press enter.
- While you can't save your page, you can share your URL so someone else can see what you see.


## How to use it

1. Choose your fields (title, background image, etc.) using a form tool.
2. You will get a URL with your custom values in the query parameters.
3. Use the URL to view a dynamic webpage which adapts to your values and changes the text and images to match it.
4. Share the URL with others.


## Background

I was frustrated at the time it takes to create a new website on a whim, resorting to creating a site from a template or existing site and changing the content or Jekyll config. Then I realized that a single website can look however you wish it to using JavaScript to make it dynamic. Supply your parameters in the URL and the app will use the content to build a webpage in your browser.

### Inspiration for design

- [whoopi-goldbot.netlify.com/](https://whoopi-goldbot.netlify.com/)
- [landing-page-boilerplate](https://michaelcurrin.github.io/landing-page-boilerplate/)


## Setup remotely

Fork this project on Github.

## Netlify

1. Sign into [Netlify](https://netlify.com) or create an account.
1. Create project, using the Github repo.
1. Wait for the site to deploy.
1. View the deploy URL.

## Github Pages

This is not in the scope of this project, It is possible to serve a React project on Github pages. For example, see [gitname/react-gh-pages](https://github.com/gitname/react-gh-pages)

## Local

- [Installation](/docs/installation.md)
- [Usage](/docs/usage.md)


## Resources

## What are URL parameters?

URL parameters are a way of sending data to a webpage using the URL - typically when sending data when responding to a form or doing a search.

Example of URL parameters:

- `?foo=bar&fizz=buzz`

URL parameters follow a structure like this:

- Start with question mark.
- Use an equals sign to separate a key and value.
- Use an ampersand to separate pairs.
- Values should be percent-encoded. e.g. a space becomes `%20`.

Links

- [Query string](https://en.wikipedia.org/wiki/Query_string) on Wikipedia.

Note that you should **never** send sensitive data (e.g. credit card details) through a URL parameters as an end user or developer. As the parameters are not secure. Rather use POST request with data sent on the payload or use a third-party integration such as for payment details.

## Credits

- [pbeshai/react-url-query](https://github.com/pbeshai/react-url-query) on Github. After I had the idea to use React to manage the state and push and pull URL params data, I soon found this project. I used that project's  [basic](https://github.com/pbeshai/react-url-query/tree/master/examples/basic) example as a starting point for this repo.
