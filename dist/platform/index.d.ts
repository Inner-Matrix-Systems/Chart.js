export function _detectPlatform(canvas: any): typeof BasicPlatform | typeof DomPlatform;
import BasicPlatform from "./platform.basic";
import DomPlatform from "./platform.dom";
import BasePlatform from "./platform.base";
export { BasePlatform, BasicPlatform, DomPlatform };
