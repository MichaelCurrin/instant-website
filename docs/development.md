# Development
> Notes for working on this project

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
