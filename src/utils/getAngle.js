// helper
export const getAngle = elm => {
  if (!elm) return;
  const st = window.getComputedStyle(elm, null);
  const transformValue =
    st.getPropertyValue("-webkit-transform") ||
    st.getPropertyValue("-moz-transform") ||
    st.getPropertyValue("-ms-transform") ||
    st.getPropertyValue("-o-transform") ||
    st.getPropertyValue("transform") ||
    "none";
  if (transformValue === "none") {
    return 0;
  }
  let values = transformValue.split("(")[1];
  values = values.split(")")[0];
  values = values.split(",");
  let a = values[0];
  let b = values[1];
  let angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  return angle;
};
