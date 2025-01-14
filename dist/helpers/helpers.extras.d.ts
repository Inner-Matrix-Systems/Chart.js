export function fontString(pixelSize: any, fontStyle: any, fontFamily: any): string;
/**
 * Throttles calling `fn` once per animation frame
 * Latest arguments are used on the actual call
 * @param {function} fn
 * @param {*} thisArg
 * @param {function} [updateFn]
 */
export function throttled(fn: Function, thisArg: any, updateFn?: Function): (...rest: any[]) => void;
/**
 * Debounces calling `fn` for `delay` ms
 * @param {function} fn - Function to call.
 * @param {number} delay - Delay in ms. 0 = immediate invocation.
 * @returns {function}
 */
export function debounce(fn: Function, delay: number): Function;
/**
 * Return start and count of visible points.
 * @param {object} meta - dataset meta.
 * @param {array} points - array of point elements.
 * @param {boolean} animationsDisabled - if true animation is disabled.
 * @returns {{start: number; count: number}}
 * @private
 */
export function _getStartAndCountOfVisiblePoints(meta: object, points: any[], animationsDisabled: boolean): {
    start: number;
    count: number;
};
/**
 * Checks if the scale ranges have changed.
 * @param {object} meta - dataset meta.
 * @returns {boolean}
 * @private
 */
export function _scaleRangesChanged(meta: object): boolean;
/**
* Request animation polyfill
*/
export const requestAnimFrame: ((callback: any) => any) | (((callback: FrameRequestCallback) => number) & typeof requestAnimationFrame);
export function _toLeftRightCenter(align: string): "left" | "right" | "center";
export function _alignStartEnd(align: string, start: number, end: number): number;
export function _textX(align: string, left: number, right: number, rtl: boolean): number;
