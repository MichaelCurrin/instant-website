# Instant website
> Create a webpage with custom text and images instantly - just change the URL query parameters.

A usecase for this is creating a website for a fictional business when brainstorming crazy ideas with friends or colleagues.


**(work in progress)**


## Features 

- Choose text and images. These parameters get turn into a URL.
- View the URL - the dynamic webpage will change based on your custom settigns.

Additional ideas:

- Include an example URL.
- Include a showcase page with URLs sent in my people or that I created.
- Fallback for now parameters (maybe a tutorial or link to tutorial).

## How to use it

1. Choose your fields (title, background image, etc.) using a form tool.
2. You will get a URL with your custom values in the query parameters.
3. Use the URL to view a dynamic webage which adapts to your values and changes the text and images to match it.
4. Share the URL with others.


## Background

I was frustrated at the time it takes to create a new website on a whim, resorting to creating a site from a template or existing site and changing the content or Jekyll config. Then I realized that a single website can look however you wish it to using JavaScript to make it dynamic. Supply your parameters in the URL and the app will use the content to build a webpage in your browser.


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

### Javascript

On handling parameters with JavaScript

- Example of getting URL parameters with JS https://www.sitepoint.com/get-url-parameters-with-javascript/
- The `URLSearchParams` function docs: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
