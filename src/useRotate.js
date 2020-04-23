import {
  getAngle
} from './utils/getAngle';

export function useRotate(elm, options) {
  // check the format
  const { degree, duration } = options;
  // check current rotate amount
  const currentRotateDegree = getAngle(elm);
  // do the rotate.
  elm.style.transition = `transform ${duration || 0}s`;
  elm.style.transform = `rotate(${degree + currentRotateDegree}deg)`;
}