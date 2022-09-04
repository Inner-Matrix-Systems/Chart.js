/**
 * Platform class for charts that can access the DOM and global window/document properties
 * @extends BasePlatform
 */
export default class DomPlatform extends BasePlatform {
    /**
       * @param {HTMLCanvasElement} canvas
       * @param {number} [aspectRatio]
       * @return {CanvasRenderingContext2D|null}
       */
    acquireContext(canvas: HTMLCanvasElement, aspectRatio?: number): CanvasRenderingContext2D | null;
    /**
       * @param {Chart} chart
       * @param {string} type
       */
    removeEventListener(chart: Chart, type: string): void;
    /**
       * @param {HTMLCanvasElement} canvas
       * @param {number} [width] - content width of parent element
       * @param {number} [height] - content height of parent element
       * @param {number} [aspectRatio] - aspect ratio to maintain
       */
    getMaximumSize(canvas: HTMLCanvasElement, width?: number, height?: number, aspectRatio?: number): {
        width: any;
        height: any;
    };
}
export type Chart = import("../core/core.controller").default;
import BasePlatform from "./platform.base";
