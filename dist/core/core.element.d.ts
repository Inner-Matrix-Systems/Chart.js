import { AnyObject } from '../../types/basic';
import { Point } from '../../types/geometric';
import { Animation } from '../../types/animation';
export default class Element<T extends AnyObject = AnyObject, O extends AnyObject = AnyObject> {
    static defaults: {};
    static defaultRoutes: any;
    x: number;
    y: number;
    active: boolean;
    options: O;
    $animations: Record<keyof T, Animation>;
    tooltipPosition(useFinalPosition: boolean): Point;
    hasValue(): boolean;
    /**
     * Gets the current or final value of each prop. Can return extra properties (whole object).
     * @param props - properties to get
     * @param [final] - get the final value (animation target)
     */
    getProps<P extends (keyof T)[]>(props: P, final?: boolean): Pick<T, P[number]>;
}
