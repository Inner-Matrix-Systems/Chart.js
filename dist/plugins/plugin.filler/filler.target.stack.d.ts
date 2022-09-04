/**
 * @param {{ chart: Chart; scale: Scale; index: number; line: LineElement; }} source
 * @return {LineElement}
 */
export function _buildStackLine(source: {
    chart: Chart;
    scale: Scale;
    index: number;
    line: LineElement;
}): LineElement;
export type Chart = import('../../core/core.controller').default;
export type Scale = import('../../core/core.scale').default;
export type PointElement = import('../../elements/element.point').default;
import { LineElement } from "../../elements";
