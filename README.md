# Instant website
> Create a webpage with custom text and images instantly - just change the URL query parameters.

A usecase for this is creating a website for a fictional business when brainstorming crazy ideas with friends or colleagues.

**(work in progress)**



## Features 

How it works:

- Choose your fields (title, background image, etc.) using a form tool.
- You will a URL with your custom values in the query parameters - `?foo=bar&fizz=buzz`
- Use the URL to view a dynamic webage which adapts to your values and changes the text and images to match it.
- Share the URL with others.

Additional ideas:

- Include an example URL.
- Include a showcase page with URLs sent in my people or that I created.


## Background

I was frustrated at the time it takes to create a new website on a whim, resorting to creating a site from a template or existing site and changing the content or Jekyll config. Then I realized that a single website can look however you wish it to using JavaScript to make it dynamic. Supply your parameters in the URL and the app will use the content to build a webpage in your browser.


## Resources

On handling parameters with JavaScript

- Example of getting URL parameters with JS https://www.sitepoint.com/get-url-parameters-with-javascript/
- The `URLSearchParams` function docs: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
