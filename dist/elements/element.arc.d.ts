export default class ArcElement extends Element<import("../../types/basic").AnyObject, import("../../types/basic").AnyObject> {
    static id: string;
    /**
     * @type {any}
     */
    static defaults: any;
    constructor(cfg: any);
    options: any;
    circumference: any;
    startAngle: any;
    endAngle: any;
    innerRadius: any;
    outerRadius: any;
    pixelMargin: number;
    fullCircles: number;
    /**
       * @param {number} chartX
       * @param {number} chartY
       * @param {boolean} [useFinalPosition]
       */
    inRange(chartX: number, chartY: number, useFinalPosition?: boolean): boolean;
    /**
       * @param {boolean} [useFinalPosition]
       */
    getCenterPoint(useFinalPosition?: boolean): {
        x: number;
        y: number;
    };
    /**
       * @param {boolean} [useFinalPosition]
       */
    tooltipPosition(useFinalPosition?: boolean): {
        x: number;
        y: number;
    };
    draw(ctx: any): void;
}
export type ArcProps = {
    x: number;
    y: number;
    startAngle: number;
    endAngle: number;
    innerRadius: number;
    outerRadius: number;
    circumference: number;
};
import Element from "../core/core.element";
