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

export function toBoolean(str:string)
{
    console.log('toBoolean is deprecated now, use validateBoolean instead');
    switch (str) {
        case 'true':
        case '1':
            return true;
        default:
            return false;
    }
}

export function validateBoolean(value:any)
{
    return value === true ||
           value === '1' ||
           value === 'true';
}
