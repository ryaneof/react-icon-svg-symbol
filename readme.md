# React Icon SVG Symbol

A simple icon component for React using [SVG Symbol](https://css-tricks.com/svg-symbol-good-choice-icons/).

- Browsers supported: IE 9+, Chrome, Safari 7.1+, Firefox, and Opera.
- Able to display cross-origin SVG symbol icons.

## Peer Dependencies

```
React v0.14.*
```

## Usage

```
npm install --save react-icon-svg-symbol
```

### your-component.jsx

```js
import React, { Component } from 'react';
import ReactIconSVGSymbol from 'react-icon-svg-symbol';

export default YourComponent extends Component {
  render() {
    return (
      <ReactIconSVGSymbol
        fileURL="https://your.svg.url/icon-svg-symbol.svg"
        symbolId="check"
        iconClassName="icon-check"
      />
    );
  }
}
```

### your-svg-symbols.svg

```svg
<?xml version="1.0" encoding="utf-8"?>

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <symbol viewBox="0 0 12 20" id="icon-chevron-left">
    <path d="M10.293,19.707 L0.586,10 L10.293,0.293 L11.707,1.707 L3.414,10 L11.707,18.293 L10.293,19.707" fill="#666666"></path>
  </symbol>
  <symbol viewBox="0 0 14 9" id="icon-chevron-up-light">
    <path d="M12.1953333,7.80466667 L6.66666667,2.276 L1.138,7.80466667 L0.195333333,6.862 L6.66666667,0.390666667 L13.138,6.862 L12.1953333,7.80466667" fill="#EEEEEE"></path>
    <path d="M1.5,7.5 L11.5,7.5" stroke="#FFFFFF" stroke-linecap="square"></path>
  </symbol>
</svg>
```

## License

The MIT License (MIT)