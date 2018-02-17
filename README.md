# metersTodegrees

Convert meters into degrees according to the latitude provided.

Calculates how many degrees are equivalent to a length in meters according to latitude.

```sh
$ npm install meterstodegrees
```

The calculations were based on [here](https://msi.nga.mil/MSISiteContent/StaticFiles/Calculators/degree.html) and [here](https://gis.stackexchange.com/questions/75528/understanding-terms-in-length-of-degree-formula/75535#75535).

## Usage

```javascript
console.log(meterstodegrees.lonDegrees(<latitude>, <meters>))
console.log(meterstodegrees.latDegrees(<latitude>, <meters>))
```

## Sample Usage

```javascript
const meterstodegrees = require("meterstodegrees");

const meters = 1000;

console.log(meterstodegrees.lonDegrees(0, meters));
// 0.008983155487515939
// At latitude 0°, 1000 meters on longitude
// is equivalent to 0.008983155487515939 degrees.

console.log(meterstodegrees.lonDegrees(45, 1000));
// 0.012682821971791809
// At latitude 45°, 1000 meters on longitude
// is equivalent to 0.012682821971791809 degrees.

console.log(meterstodegrees.latDegrees(0, meters));
// 0.009043695025814083
// At latitude 0°, 1000 meters on latitude
// is equivalent to 0.009043695025814083 degrees.

console.log(meterstodegrees.latDegrees(45, 1000));
// 0.008998328965319496
// At latitude 45°, 1000 meters on latitude
// is equivalent to 0.008998328965319496 degrees.
```
