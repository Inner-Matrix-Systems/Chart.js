/**
 * @param {PointElement[] | { x: number; y: number; }} boundary
 * @param {LineElement} line
 * @return {LineElement?}
 */
export function _createBoundaryLine(boundary: PointElement[] | {
    x: number;
    y: number;
}, line: LineElement): LineElement | null;
export function _shouldApplyFill(source: any): boolean;
export type Chart = import('../../core/core.controller').default;
export type Scale = import('../../core/core.scale').default;
export type PointElement = import('../../elements/element.point').default;
import { LineElement } from "../../elements";
