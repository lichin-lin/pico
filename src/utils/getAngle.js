/**
 * return current rotate angle of the elemet.
 * @param {*} elm DOM element
 */
export const getAngle = elm => {
  if (!elm) return;
  const obj = window.getComputedStyle(elm, null);
  const transformValue =
    obj.getPropertyValue("-webkit-transform") ||
    obj.getPropertyValue("-moz-transform") ||
    obj.getPropertyValue("-ms-transform") ||
    obj.getPropertyValue("-o-transform") ||
    obj.getPropertyValue("transform") ||
    "none";
  if (transformValue === "none") {
    return 0;
  }
  let values = transformValue.split("(")[1];
  values = values.split(")")[0];
  values = values.split(",");
  let a = values[0];
  let b = values[1];
  let radians = Math.atan2(b, a);
  if (radians < 0) {
    radians += 2 * Math.PI;
  }
  let angle = Math.round(radians * (180 / Math.PI)) || 0;
  return angle;
};
