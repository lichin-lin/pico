export const pico = (elm, options, source) => {
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
        ctx.clearRect(0, 0, width, height);
        ctx.translate(width / 2, height / 2);
        ctx.rotate((value * Math.PI) / 180);
        ctx.translate(-width / 2, -height / 2);
        ctx.drawImage(source, 0, 0, width, height);
        break;
      default:
        break;
    }
  }
};
