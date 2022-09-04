export function getRtlAdapter(rtl: any, rectX: any, width: any): {
    x(x: any): any;
    setWidth(w: any): void;
    textAlign(align: any): any;
    xPlus(x: any, value: any): any;
    leftForLtr(x: any, _itemWidth: any): any;
};
export function overrideTextDirection(ctx: any, direction: any): void;
export function restoreTextDirection(ctx: any, original: any): void;
