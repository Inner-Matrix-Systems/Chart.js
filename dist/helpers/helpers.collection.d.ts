/**
 * Binary search
 * @param {array} table - the table search. must be sorted!
 * @param {number} value - value to find
 * @param {function} [cmp]
 * @private
 */
export function _lookup(table: any[], value: number, cmp?: Function): {
    lo: number;
    hi: number;
};
/**
 * Return subset of `values` between `min` and `max` inclusive.
 * Values are assumed to be in sorted order.
 * @param {number[]} values - sorted array of values
 * @param {number} min - min value
 * @param {number} max - max value
 */
export function _filterBetween(values: number[], min: number, max: number): number[];
/**
 * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
 * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
 * called on the '_onData*' callbacks (e.g. _onDataPush, etc.) with same arguments.
 */
export function listenArrayEvents(array: any, listener: any): void;
/**
 * Removes the given array event listener and cleanup extra attached properties (such as
 * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
 */
export function unlistenArrayEvents(array: any, listener: any): void;
/**
 * @param {Array} items
 */
export function _arrayUnique(items: any[]): any[];
export function _lookupByKey(table: any[], key: string, value: number, last?: boolean): {
    lo: number;
    hi: number;
};
export function _rlookupByKey(table: any[], key: string, value: number): {
    lo: number;
    hi: number;
};
