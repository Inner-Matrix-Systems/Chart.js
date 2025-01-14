/**
 * @typedef { import('../../core/core.scale').default } Scale
 * @typedef { import('../../elements/element.line').default } LineElement
 * @typedef { import('../../../types').FillTarget } FillTarget
 * @typedef { import('../../../types').ComplexFillTarget } ComplexFillTarget
 */
export function _resolveTarget(sources: any, index: any, propagate: any): any;
/**
 * @param {LineElement} line
 * @param {number} index
 * @param {number} count
 */
export function _decodeFill(line: LineElement, index: number, count: number): any;
/**
 * @param {FillTarget | ComplexFillTarget} fill
 * @param {Scale} scale
 * @returns {number | null}
 */
export function _getTargetPixel(fill: FillTarget | ComplexFillTarget, scale: Scale): number | null;
/**
 * @param {FillTarget | ComplexFillTarget} fill
 * @param {Scale} scale
 * @param {number} startValue
 * @returns {number | undefined}
 */
export function _getTargetValue(fill: FillTarget | ComplexFillTarget, scale: Scale, startValue: number): number | undefined;
export type Scale = import('../../core/core.scale').default;
export type LineElement = import('../../elements/element.line').default;
export type FillTarget = import('../../../types').FillTarget;
export type ComplexFillTarget = import('../../../types').ComplexFillTarget;
