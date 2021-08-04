# Installation
> Local install guide

## Requirements

- Node.js
- Make


## Install System dependencies

Install NodeJS using instructions [here](https://github.com/MichaelCurrin/learn-to-code/blob/master/en/topics/scripting_languages/JavaScript/node.md)

That install will include [NPM](https://github.com/MichaelCurrin/learn-to-code/blob/master/en/topics/scripting_languages/JavaScript/node_packages.md), which is used below.

```sh
$ git clone git@github.com:MichaelCurrin/instant-website.git
$ cd instant-website
```


## Install project dependencies

Navigate to the project root.

Install project dependencies from [package.json](/package.json).

```sh
$ npm install
```

Here are some highlights and their purpose:

- [React URL Query](https://www.npmjs.com/package/react-url-query) - Allow sending and receiving params between the address bar and the state, so form values appear in the URL.
- [Bulma](https://bulma.io/) - CSS framework for styling.
