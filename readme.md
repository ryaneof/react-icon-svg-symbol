# React Icon SVG Symbol

A simple icon component for React using SVG Symbol.

## Peer Dependencies

```
React v0.14.*
```

## Usage

```
npm install --save react-icon-svg-symbol
```

```
import React, { Component } from 'react';
import ReactIconSVGSymbol from 'react-icon-svg-symbol';

export default ReactIconSVGSymbol extends Component {
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

## License

The MIT License (MIT)