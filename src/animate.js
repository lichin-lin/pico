import {
  getAngle
} from './utils/getAngle';

/**
 * animate the element base on the options.
 * @param {*} elm  DOM element
 * @param {object} options options include two part, one is the transform property, one is the transition property
 */
export const animate = (elm, options) => {
  if (!elm) {
    return;
  }
  const { transition, ...properties } = options;
  // handle transition
  elm.style.transition = `transform ${(transition && transition.duration) ||
    0}s`;
  // handle properties update
  for (const [key, value] of Object.entries(properties)) {
    switch (key) {
      // TODO: add more case...
      case "rotate":
      default:
        const elmRotateDegree = getAngle(elm);
        elm.style.transform = `rotate(${value + elmRotateDegree}deg)`;
        break;
    }
  }
};