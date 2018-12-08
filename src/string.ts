export function lowerFirst(str:string)
{
    return str.substr(0, 1).toLowerCase() +
           str.substr(1);
}

export function upperFirst(str:string)
{
    return str.substr(0, 1).toUpperCase() +
           str.substr(1);
}

export function removeSubstr(str:string, start:number,
                                         end:number) {
    return str.substring(0, start) +
           str.substring(end);
}

export function pad1(n:number)
{
    console.warn('string/pad1 is deprecated use string/padNum1 instead');
    if (n < 10)
        return '0' + n;
    return '' + n;
}

export function pad2(n:number)
{
    console.warn('string/pad2 is deprecated use string/padNum2 instead');
    if (n < 10)
        return '00' + n;
    else if (n < 100)
        return '0' + n;
    return '' + n;
}

export function padNum1(n:number)
{
    if (n < 10)
        return '0' + n;
    return '' + n;
}

export function padNum2(n:number)
{
    if (n < 10)
        return '00' + n;
    else if (n < 100)
        return '0' + n;
    return '' + n;
}

export function pad(str:string, length:number, char:string = ' ')
{
    const padding = createPadding((length - str.length) * 0.5 | 0, char);
    return padding +
           str.substring(0, length) +
           padding;
}

export function padStart(str:string, length:number, char:string = ' ')
{
    return createPadding(length - str.length, char) +
           str.substring(0, length);
}

export function padEnd(str:string, length:number, char:string = ' ')
{
    return str.substring(0, length) +
           createPadding(length - str.length, char);
}

function createPadding(length:number, char:string = ' ')
{
    let padding = '';
    for (let i = length; i-- > 0;)
        padding += char;
    
    return padding;
}
