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
  let angle = Math.round(Math.atan2(b, a) * (180 / Math.PI)) || 0;
  return angle;
};
