export function splineCurve(firstPoint: any, middlePoint: any, afterPoint: any, t: any): {
    previous: {
        x: number;
        y: number;
    };
    next: {
        x: any;
        y: any;
    };
};
/**
 * This function calculates Bézier control points in a similar way than |splineCurve|,
 * but preserves monotonicity of the provided data and ensures no local extremums are added
 * between the dataset discrete points due to the interpolation.
 * See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
 *
 * @param {{
 * x: number,
 * y: number,
 * skip?: boolean,
 * cp1x?: number,
 * cp1y?: number,
 * cp2x?: number,
 * cp2y?: number,
 * }[]} points
 * @param {string} indexAxis
 */
export function splineCurveMonotone(points: {
    x: number;
    y: number;
    skip?: boolean;
    cp1x?: number;
    cp1y?: number;
    cp2x?: number;
    cp2y?: number;
}[], indexAxis?: string): void;
/**
 * @private
 */
export function _updateBezierControlPoints(points: any, options: any, area: any, loop: any, indexAxis: any): void;
