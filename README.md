# Turn Back The Block

Website built with Vite + React
Developed by The Kru - https://thekru.rocks/

# Styling

Each component and page have their own respective styling sheet, while a `_global.styles.scss` can be found at the root of `src` - global sheet includes things like mixins, breakpoints, colors, fonts, etc.

# Headings

The heading for each page is a singular component using `react-router-dom` to display the correct string depending on the path, using `useLocation`.

# Location Data

Location data can be found within the `Map` component, including all `Images` and `Plats`. If you're adding a new `Address`, it must be added to the `locations.json`. If you're adding new `Images` and `Plats`, each must share the same name as their respective `Address`. Also, `Images` must be `.jpg` - For example:

123 Flower Road,
123 Flower Road.jpg
123 Flower Road.pdf

This is because `Image` & `Plat` mapping is done by concatenating the `Address` with `.jpg` & `.pdf` string literals.

# Map

This project uses the `google-maps-react-markers` library.
See: https://github.com/giorgiabosello/google-maps-react-markers

# More

# form validation and processing

# server env files

# instagram token refresh script

# error handling

# menu close when clicked outside of

# make the numbers go woah woehwo
