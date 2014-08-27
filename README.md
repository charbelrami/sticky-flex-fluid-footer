# sticky flex fluid footer

A clean solution to a sticky fluid (without fixed height) footer,
without using viewport units (e.g. min-height: 100vh). No more
[buggy behaviors in iOS 7 Safari and IE](http://caniuse.com/#feat=viewport-units).

## CSS/HTML
```css
html {
  min-height: 100%;
  height: 100%;
  display: flex;
}

body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}
```

```html
<main>
</main>
<footer>
  a sticky fluid footer!
</footer>
```
## License
MIT. Copyright 2014 Charbel Rami.
