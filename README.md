# Turn Back The Block

Website built with Vite + React
Developed by The Kru - https://thekru.rocks/

# Styling

Each component and page have their own respective styling sheet, while a `_global.styles.scss` can be found at the root of `src` - global sheet includes things like mixins, breakpoints, colors, fonts, etc.

# Headings

The heading for each page is a singular component using `react-router-dom` to display the correct string depending on the path, using `useLocation`.

# Map

This project uses the `google-maps-react-markers` library.
See: https://github.com/giorgiabosello/google-maps-react-markers

# Location Data

Location data can be found within the `Map` component, including all `Images` and `Plats`. If you're adding a new `Address`, it must be added to the `locations.json`. If you're adding new `Images` and `Plats`, each must share the same name as their respective `Address`. Also, `Images` must be `.jpg` - For example:

123 Flower Road,
123 Flower Road.jpg
123 Flower Road.pdf

This is because `Image` & `Plat` mapping is done by concatenating the `Address` with `.jpg` & `.pdf` string literals.

# Location Coordinates

Within the `Map` component you'll find a `locations` folder that contains a `generateCoordinates` script. When an address or two is added, grabbing the `lat` and `lng` data from a google map search is fine, but when dealing with bulk addresses, you can run this script to get their corresponding coordinate data. Then I just give ChatGPT the location data and the coordinate data and tell it to match them up 1:1.
