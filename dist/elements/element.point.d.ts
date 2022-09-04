export default class PointElement extends Element<import("../../types/basic").AnyObject, import("../../types/basic").AnyObject> {
    static id: string;
    /**
     * @type {any}
     */
    static defaults: any;
    constructor(cfg: any);
    options: any;
    parsed: any;
    skip: any;
    stop: any;
    inRange(mouseX: any, mouseY: any, useFinalPosition: any): boolean;
    inXRange(mouseX: any, useFinalPosition: any): boolean;
    inYRange(mouseY: any, useFinalPosition: any): boolean;
    getCenterPoint(useFinalPosition: any): {
        x: unknown;
        y: unknown;
    };
    size(options: any): number;
    draw(ctx: any, area: any): void;
    getRange(): any;
}
import Element from "../core/core.element";
