# Development
> Notes for working on this project

## Key

The key attribute is used wherever there is a list of components since React JS browser console warnings require unique keys for arrays, as text or worst case as index numbers.

## Image data

See [imageData.json](/src/imageData.json).

While it is possible to look up "popular" searches on Unsplash through the sitemaps, some of them are inappropriate and the list is also very long (about 14k items). Therefore a shorter list has been compiled by hand using the Unsplash homepage.

To get the items anyway, here is a script to be run against the URL `https://unsplash.com/sitemaps/searches/popular.xml`.

```javascript
var results = document.querySelectorAll('loc');
var keywords = [...results].map(el => el.textContent.split('/')[5])
// [ "100", "1000", "100-dollar-bill", "1-584-x-396", "16-9", "18", "1920", "1920s", "1920x1080", "1920-x-1080", … ]
```

The landing page list is shorter - `https://unsplash.com/sitemaps/landing_pages/all.xml`.

Example URL: https://unsplash.com/images/travel/statue-of-liberty

## Help

Add help with this Bulma class:

```html
<p class="help">Message here.</p>
```

## FormCard

In `FormCard`, we see that an empty value in the field forces the default property to be used.

We could force values to become a null character if the field is empty, to stop from filling the field with the default prop value. And then replace it in a string start - this replace does not work though.

```
if (e.target.value) {
    return onChangeTitle(e.target.value.replace('\0', ''));
 } else {
    return onChangeTitle('\0');
}
```
