/**
 *
 * @param {HTMLElement} elm canvas
 * @param {object} options transform properties
 */
export const pico = (elm, options) => {
  if (!(elm instanceof HTMLElement) || elm.tagName !== "CANVAS") {
    throw new Error("Element for Pico should be a canvas");
  }
  for (const [key, value] of Object.entries(options)) {
    switch (key) {
      // TODO: add more case...
      case "rotate":
        if (typeof value !== "number") {
          throw new Error(`Value of ${key} should be number type`);
        }
        const { width, height } = elm;
        let ctx = elm.getContext("2d");

        // create a temp
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = height;
        tempCanvas.height = width;
        const tempCtx = tempCanvas.getContext("2d");
        tempCtx.clearRect(0, 0, width, height);
        tempCtx.translate(height / 2, width / 2);
        tempCtx.rotate((value * Math.PI) / 180);
        tempCtx.translate(-width / 2, -height / 2);
        tempCtx.drawImage(elm, 0, 0);

        // render on original
        elm.height = width;
        elm.width = height;
        ctx.drawImage(tempCanvas, 0, 0);
        break;
      default:
        break;
    }
  }
};
