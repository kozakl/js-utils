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
    if (n < 10)
        return '0' + n;
    return '' + n;
}

export function pad2(n:number)
{
    if (n < 10)
        return '00' + n;
    else if (n < 100)
        return '0' + n;
    return '' + n;
}