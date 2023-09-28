# Turn Back The Block

Website built with Vite + React
Developed by The Kru - https://thekru.rocks/

# Location Data

Location data can be found within the `Map` component, including all `Images` and `Plats`. If you're adding a new `Address`, it must be added to the `locations.json`. If you're adding new `Images` and `Plats`, each must share the same name as their respective `Address`. Also, `Images` must be `.jpg` - For example:

123 Flower Road,
123 Flower Road.jpg
123 Flower Road.pdf

This is because `Image` & `Plat` mapping is done by concatenating the `Address` with `.jpg` & `.pdf` string literals.

# Map

1. static coordinates
2. broken map
