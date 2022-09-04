/**
 * Implementation of the nice number algorithm used in determining where axis labels will go
 * @return {number}
 */
export function niceNum(range: any): number;
/**
 * Returns an array of factors sorted from 1 to sqrt(value)
 * @private
 */
export function _factorize(value: any): number[];
export function isNumber(n: any): boolean;
export function almostEquals(x: any, y: any, epsilon: any): boolean;
export function almostWhole(x: any, epsilon: any): boolean;
/**
 * @private
 */
export function _setMinAndMaxByKey(array: any, target: any, property: any): void;
export function toRadians(degrees: any): number;
export function toDegrees(radians: any): number;
/**
 * Returns the number of decimal places
 * i.e. the number of digits after the decimal point, of the value of this Number.
 * @param {number} x - A number.
 * @returns {number} The number of decimal places.
 * @private
 */
export function _decimalPlaces(x: number): number;
export function getAngleFromPoint(centrePoint: any, anglePoint: any): {
    angle: number;
    distance: number;
};
export function distanceBetweenPoints(pt1: any, pt2: any): number;
/**
 * Shortest distance between angles, in either direction.
 * @private
 */
export function _angleDiff(a: any, b: any): number;
/**
 * Normalize angle to be between 0 and 2*PI
 * @private
 */
export function _normalizeAngle(a: any): number;
/**
 * @private
 */
export function _angleBetween(angle: any, start: any, end: any, sameAngleIsFullCircle: any): boolean;
/**
 * Limit `value` between `min` and `max`
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @private
 */
export function _limitValue(value: number, min: number, max: number): number;
/**
 * @param {number} value
 * @private
 */
export function _int16Range(value: number): number;
/**
 * @param {number} value
 * @param {number} start
 * @param {number} end
 * @param {number} [epsilon]
 * @private
 */
export function _isBetween(value: number, start: number, end: number, epsilon?: number): boolean;
/**
 * @alias Chart.helpers.math
 * @namespace
 */
export const PI: number;
export const TAU: number;
export const PITAU: number;
export const INFINITY: number;
export const RAD_PER_DEG: number;
export const HALF_PI: number;
export const QUARTER_PI: number;
export const TWO_THIRDS_PI: number;
export const log10: (x: number) => number;
export const sign: (x: number) => number;
