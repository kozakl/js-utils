export function scaleDown(ratio:number, maxWidth:number, maxHeight:number)
{
    const width1 = maxWidth,
          height1 = maxWidth / ratio;
    const width2 = maxHeight * ratio,
          height2 = maxHeight;
    if (width1 * height1 < width2 * height2) {
        return {
            x: width1,
            y: height1
        }
    } else {
        return {
            x: width2,
            y: height2
        }
    }
}
