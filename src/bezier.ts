export function pointOnQuadCurve(x1:number, y1:number,
                                 cx:number, cy:number,
                                 x2:number, y2:number,
                                 t:number,  result:Result) {
    const ax = cx - x1, ay = cy - y1,
          bx = x2 - cx - ax, by = y2 - cy - ay;
    
    result.x = x1 + t * (2*ax + t*bx);
    result.y = y1 + t * (2*ay + t*by);
    return result;
}

export function pointOnCubicCurve(x1:number,  y1:number,
                                  c1x:number, c1y:number,
                                  c2x:number, c2y:number,
                                  x2:number,  y2:number,
                                  t:number,   result:Result) {
    const ax = c1x - x1, ay = c1y - y1,
          bx = c2x - c1x - ax, by = c2y - c1y - ay;
    const cx = x2  - c2x - ax - bx - bx,
          cy = y2  - c2y - ay - by - by;
    
    result.x = x1 + t * (3*ax + (t * (3*bx + t*cx)));
    result.y = y1 + t * (3*ay + (t * (3*by + t*cy)));
    return result;
}

export function pointOnCubicCurveX(x1:number,  c1x:number,
                                   c2x:number, x2:number,
                                   t:number) {
    const ax = c1x - x1,
          bx = c2x - c1x - ax,
          cx = x2  - c2x - ax - bx - bx;
    
    return x1 + t * (3*ax + (t * (3*bx + t*cx)));
}

export function pointOnCubicCurveY(y1:number,  c1y:number,
                                   c2y:number, y2:number,
                                   t:number) {
    const ay = c1y - y1,
          by = c2y - c1y - ay,
          cy = y2  - c2y - ay - by - by;
    
    return y1 + t * (3*ay + (t * (3*by + t*cy)));
}

interface Result {
    x?:number,
    y?:number
}
