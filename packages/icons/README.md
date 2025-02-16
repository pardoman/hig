# Icons

This package retains the source of the library of Weave icons.
You can import individual icons to render on your app.

```jsx
import { Assets24 } from "@weave-design/icons";

const MyComponent = () => (
    <div className="my-class">
        <Assets24 />
    </div>
);

export default MyComponent
```

## Getting started

### Install the package

```bash
yarn add @weave-design/icons @weave-design/theme-context @weave-design/theme-data
```

# Developing

## Adding a New Icon

To add a new SVG icon to the library, add the `svg` file to the `src/icons` directory.

Then run the following command:

```bash
yarn build-icons
```

This will use SVGO to optimize the new icon, and update our release files. Remember to commit these changes.

## Accessing SVG source files

SVG source files for all icons are available in the `build/svg` subdirectory of the `@weave-design/icons` package (e.g. `./node_modules/@weave-design/icons/build/svg`).

## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component. 

Icons can take a `color` prop that will accept any hex code, rgb, rgba, or color string that can change the default color. Icons also has a `stylesheet` prop that accepts a function wherein you can modify its styles.
