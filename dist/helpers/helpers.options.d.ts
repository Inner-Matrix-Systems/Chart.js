/**
 * @alias Chart.helpers.options
 * @namespace
 */
/**
 * Converts the given line height `value` in pixels for a specific font `size`.
 * @param {number|string} value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
 * @param {number} size - The font size (in pixels) used to resolve relative `value`.
 * @returns {number} The effective line height in pixels (size * 1.2 if value is invalid).
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
 * @since 2.7.0
 */
export function toLineHeight(value: number | string, size: number): number;
/**
 * @param {any} value
 * @param {string[] | Record<string, string>} props
 */
export function _readValueToProps(value: any, props: string[] | Record<string, string>): {};
/**
 * Converts the given value into a TRBL object.
 * @param {number|object} value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns {object} The padding values (top, right, bottom, left)
 * @since 3.0.0
 */
export function toTRBL(value: number | object): object;
/**
 * Converts the given value into a TRBL corners object (similar with css border-radius).
 * @param {number|object} value - If a number, set the value to all TRBL corner components,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 * @returns {object} The TRBL corner values (topLeft, topRight, bottomLeft, bottomRight)
 * @since 3.0.0
 */
export function toTRBLCorners(value: number | object): object;
/**
 * Converts the given value into a padding object with pre-computed width/height.
 * @param {number|object} value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns {object} The padding values (top, right, bottom, left, width, height)
 * @since 2.7.0
 */
export function toPadding(value: number | object): object;
/**
 * Parses font options and returns the font object.
 * @param {object} options - A object that contains font options to be parsed.
 * @param {object} [fallback] - A object that contains fallback font options.
 * @return {object} The font object.
 * @private
 */
export function toFont(options: object, fallback?: object): object;
/**
 * Evaluates the given `inputs` sequentially and returns the first defined value.
 * @param {Array} inputs - An array of values, falling back to the last value.
 * @param {object} [context] - If defined and the current value is a function, the value
 * is called with `context` as first argument and the result becomes the new input.
 * @param {number} [index] - If defined and the current value is an array, the value
 * at `index` become the new input.
 * @param {object} [info] - object to return information about resolution in
 * @param {boolean} [info.cacheable] - Will be set to `false` if option is not cacheable.
 * @since 2.7.0
 */
export function resolve(inputs: any[], context?: object, index?: number, info?: {
    cacheable?: boolean;
}): any;
/**
 * @param {{min: number, max: number}} minmax
 * @param {number|string} grace
 * @param {boolean} beginAtZero
 * @private
 */
export function _addGrace(minmax: {
    min: number;
    max: number;
}, grace: number | string, beginAtZero: boolean): {
    min: any;
    max: any;
};
/**
 * Create a context inheriting parentContext
 * @param {object|null} parentContext
 * @param {object} context
 * @returns {object}
 */
export function createContext(parentContext: object | null, context: object): object;
