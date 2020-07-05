# Instant Website documentation

Perhaps more suitably "Instant Webpage".

## Where the idea came from

I was frustrated at the time it takes to create a new website on a whim. I had a flow using a base HTML page or a Jekyll site which a config, but I wanted it to be faster. And without using Wordpress or Six.

Then I realized that a single website can look however I wish it within seconds by using _JavaScript_ to make it dynamic. A form makes it easy to change and a URL with parameters makes it easy to persist and share.

So I found a way to build a webpage in the browser, using a template page I created (without React) and some URL query parameters to configure it. For ease of use over editing the URL directly, I added a form input which generates the page and the URL. An easy do this is with React.

The appearance of the site is kept simple - some text and some images, with a fixed layout.

### Inspiration for design

- [whoopi-goldbot.netlify.com](https://whoopi-goldbot.netlify.com/)
- [landing-page-boilerplate](https://michaelcurrin.github.io/landing-page-boilerplate/)
- [docsify](https://docsify.js.org/#/) cover page.


## Requirements


| Name                        | Role                                         |
| --------------------------- | -------------------------------------------- |
| [Node](https://nodejs.org/) | Install and run Node packages from NPM site. |
| [Netlify](netlify.com/)     | Optionally host the site here.               |


## Setup and run

### How to run remotely

See the [Remote](remote.md) doc.

### How to run locally

- [Installation](installation.md).
- [Usage](usage.md)
- [Demo](demo.md) - This focuses on rendering flat content using Bulma styling and does not use React or any other JS.


## Development

See the [Development](develpment.md) doc.


## Credits

### Bulma card layout

- [CodePen](https://codepen.io/egoens/pen/NbmEbR)
    - Shows a centered card and uses Bulma.
    - This HTML and CSS (specified there as SCSS) as was used as the basis for this project's layout. Then later realized using a Bulma Modal element that is always visible and has no shaded background needs far less custom CSS and so did that instead. see _Modal_ below.
- Bulma tutorials
    - [Image](https://bulma.io/documentation/elements/image/) element.
    - [Card](https://bulma.io/documentation/components/card/) components.
    - [Modal](https://bulma.io/documentation/components/modal/) component.
    - [Hero](https://bulma.io/documentation/layout/hero/#fullheight-hero) component. Full height hero as background image, plus navbar is shown there.

### Query parameter handling

- React URL Query library
    - Links
        - [pbeshai/react-url-query](https://github.com/pbeshai/react-url-query) on Github.
        - [API reference docs](https://peterbeshai.com/react-url-query/docs/api/)
    - After I had the idea to use React to manage the state and push and pull [URL query parameter](https://github.com/MichaelCurrin/learn-to-code/blob/master/Web%20dev/HTML/url_query_parameters.md) data, I soon found this project.
    - I used that project's [basic](https://github.com/pbeshai/react-url-query/tree/master/examples/basic) example as a starting point for this repo.
    - The other examples use React Router, but I didn't want to add another dependency in case it added more complexity than what it reduced, especially if I the basic one works fine without that.

### Images

Stock image used for free from [unsplash.com](https://unsplash.com) and loaded through their [source.unsplash.com](https://source.unsplash.com) domain.

Read more about Unsplash usage in this [stock images](https://github.com/MichaelCurrin/learn-to-code/blob/master/en/topics/web_dev/HTML/stock_images.md) guide.
