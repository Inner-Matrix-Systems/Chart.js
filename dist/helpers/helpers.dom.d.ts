/**
 * Note: typedefs are auto-exported, so use a made-up `dom` namespace where
 * necessary to avoid duplicates with `export * from './helpers`; see
 * https://github.com/microsoft/TypeScript/issues/46011
 * @typedef { import("../core/core.controller").default } dom.Chart
 * @typedef { import('../../types').ChartEvent } ChartEvent
 */
/**
 * @private
 */
export function _isDomSupported(): boolean;
/**
 * @private
 */
export function _getParentNode(domNode: any): any;
export function getStyle(el: any, property: any): any;
/**
 * Gets an event's x, y coordinates, relative to the chart area
 * @param {Event|ChartEvent} evt
 * @param {dom.Chart} chart
 * @returns {{x: number, y: number}}
 */
export function getRelativePosition(evt: Event | ChartEvent, chart: dom.Chart): {
    x: number;
    y: number;
};
export function getMaximumSize(canvas: any, bbWidth: any, bbHeight: any, aspectRatio: any): {
    width: any;
    height: any;
};
/**
 * @param {import('../core/core.controller').default} chart
 * @param {number} [forceRatio]
 * @param {boolean} [forceStyle]
 * @returns {boolean} True if the canvas context size or transformation has changed.
 */
export function retinaScale(chart: import('../core/core.controller').default, forceRatio?: number, forceStyle?: boolean): boolean;
/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns {number=} Size in pixels or undefined if unknown.
 */
export function readUsedSize(element: any, property: any): number | undefined;
/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */
export const supportsEventListenerOptions: boolean;
export namespace dom {
    /**
     * Note: typedefs are auto-exported, so use a made-up `dom` namespace where
     * necessary to avoid duplicates with `export * from './helpers`; see
     * https://github.com/microsoft/TypeScript/issues/46011
     */
    type Chart = import("../core/core.controller").default;
}
/**
 * Note: typedefs are auto-exported, so use a made-up `dom` namespace where
 * necessary to avoid duplicates with `export * from './helpers`; see
 * https://github.com/microsoft/TypeScript/issues/46011
 */
export type ChartEvent = import('../../types').ChartEvent;
