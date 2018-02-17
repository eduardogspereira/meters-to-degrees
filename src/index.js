/**
 *  Based on https://msi.nga.mil/MSISiteContent/StaticFiles/Calculators/degree.html
 *  and
 *  https://gis.stackexchange.com/questions/75528/understanding-terms-in-length-of-degree-formula/75535#75535
 */

const m1 = 111132.92;
const m2 = -559.82;
const m3 = 1.175;
const m4 = -0.0023;
const p1 = 111412.84;
const p2 = -93.5;
const p3 = 0.118;

const lonLen = latitude =>
  p1 * Math.cos(latitude) +
  p2 * Math.cos(3 * latitude) +
  p3 * Math.cos(5 * latitude);

const latLen = latitude =>
  m1 +
  m2 * Math.cos(2 * latitude) +
  m3 * Math.cos(4 * latitude) +
  m4 * Math.cos(6 * latitude);

const deg2rad = degrees => degrees * (2.0 * Math.PI) / 360;

const lonDegree = (degrees, meters) => meters / lonLen(deg2rad(degrees));
const latDegree = (degrees, meters) => meters / latLen(deg2rad(degrees));

exports.lonLength = lonLength;
exports.latLength = latLength;
