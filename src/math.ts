export const PI_M2 = Math.PI * 2;
export const PI_D2 = Math.PI / 2;
export const RADIANS = Math.PI / 180;
export const DEGREES = 180 / Math.PI;

export function rndRange(min:number, max:number) {
    return min + (Math.random() * (max - min));
}

export function rndIntRange(min:number, max:number) {
    return Math.round(rndRange(min, max));
}

export function rndSign() {
    return Math.random() > 0.5 ? 1 : -1;
}

export function clamp(x:number, min:number,
                                max:number) {
    return Math.max(min, Math.min(x, max));
}

export function fabs(x:number) {
    return x < 0 ? -x : x;
}

export function iabs(x:number) {
    return (x + (x >> 31)) ^ (x >> 31);
}

export function abs(x:number) {
    console.warn('math/abs is deprecated use math/iabs or math/fabs instead');
}

export function sign(x:number) {
    return Math.abs(x) / x | 0;
}
