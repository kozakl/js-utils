export function isFill(str:string)
{
    if (!str)
        return false;
    return /\S/.test(str);
}

export function isEmail(str:string)
{
    if (!str)
        return false;
    return /\S+@\S+\.\S+/.test(str);
}

export function validateBoolean(value:any) {
    return value === true ||
           value === '1' ||
           value === 'true';
}
