export function pad2(n:number)
{
    if (n < 10)
        return '0' + n;
    return '' + n;
}

export function pad3(n:number)
{
    if (n < 10)
        return '00' + n;
    else if (n < 100)
        return '0' + n;
    return '' + n;
}

export function pad4(n:number)
{
    if (n < 10)
        return '000' + n;
    else if (n < 100)
        return '00' + n;
    else if (n < 1000)
        return '0' + n;
    return '' + n;
}

export function pad5(n:number)
{
    if (n < 10)
        return '0000' + n;
    else if (n < 100)
        return '000' + n;
    else if (n < 1000)
        return '00' + n;
    else if (n < 10000)
        return '0' + n;
    return '' + n;
}
