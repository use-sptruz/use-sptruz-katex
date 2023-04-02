# @use-sptruz/katex

This is a package for a React hook called `@use-sptruz/katex`, which handles the rendering of LaTeX math expressions using KaTeX.

## Installation

To install `@use-sptruz/katex`, use the following command:

```bash
# npm
npm install --save @use-sptruz/katex

# yarn
yarn add @use-sptruz/katex

# pnpm
pnpm add @use-sptruz/katex
```

## Usage

```jsx
import React from 'react';
import { useKaTeX } from '@use-sptruz/katex';

const MyComponent = () => {
  const { html, error } = useKaTeX({
    formula: 'c = \\pm\\sqrt{a^2 + b^2}',
    displayMode: false,
    errorColor: '#cc0000',
    renderError: false,
  });

  if (error) {
    return <div style={{ color: errorColor }}>Error: {error.message}</div>;
  }

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MyComponent;
```

## API

### useKaTeX

```tsx
useKaTeX({
  formula: string,
  displayMode?: boolean,
  errorColor?: string,
  renderError?: boolean,
}): { html: string, error?: Error };
```

This hook takes the following parameters:

- `formula` (required): A string representing the LaTeX math expression to render.
- `displayMode` (optional): A boolean indicating whether to display the expression in display mode (true) or inline mode (false). Default is false.
- `errorColor` (optional): A string representing the color to use for error messages. Default is '#cc0000'.
- `renderError` (optional): A boolean indicating whether to render an error message or throw an error. Default is false.

The hook returns an object with two properties:

- `html`: A string representing the HTML markup for the rendered math expression.
- `error` (optional): An Error object representing any errors that occurred during rendering.

## License

This package is licensed under the MIT License.
