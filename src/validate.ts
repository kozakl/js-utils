export function isFill(str:string) {
    return /\S/.test(str);
}

export function isEmail(str:string) {
    return /\S+@\S+\.\S+/.test(str);
}

export function toBoolean(str:string)
{
    switch (str) {
        case 'true':
        case '1':
            return true;
        default:
            return false;
    }
}
