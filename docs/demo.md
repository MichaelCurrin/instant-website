# Demo
> Run the demo app locally to view design and layout approaches

A demo app was used at the start of the project to focus on appearance rather than making a dynamic site. It focuses on rendering flat content using Bulma styling and does _not__ use React or any other JS.

The demo app can be viewed locally without installing packages. This can be useful for prototyping designs quickly without using the more complex React setup.

Clone the repo locally then continue below.

This demo is based around the [static_demos](https://github.com/MichaelCurrin/instant-website/tree/master/static_demos) directory.

## Use VS Code's Live Server

If you use VS Code, open the project in VS Code and start the _Live Server_ extension. You should install it if you don't have it already.

Open in your browser:

- [http://localhost:5500/static_demos/](http://localhost:5500/static_demos/)

## Use Python server

Start an HTTP server using Python.

```sh
$ (cd static_demos && python3 -m http.server 8888)
```

- [http://localhost:8888/static_demos/](http://localhost:8888/static_demos/)
