/**
 * @typedef { import("./core.controller").default } Chart
 * @typedef {{value:number | string, label?:string, major?:boolean, $context?:any}} Tick
 */
/**
 * Returns a subset of ticks to be plotted to avoid overlapping labels.
 * @param {import('./core.scale').default} scale
 * @param {Tick[]} ticks
 * @return {Tick[]}
 * @private
 */
export function autoSkip(scale: import('./core.scale').default, ticks: Tick[]): Tick[];
export type Chart = import("./core.controller").default;
export type Tick = {
    value: number | string;
    label?: string;
    major?: boolean;
    $context?: any;
};
