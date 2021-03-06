export function lowerFirst(str:string) {
    return str.substr(0, 1).toLowerCase() +
           str.substr(1);
}

export function upperFirst(str:string) {
    return str.substr(0, 1).toUpperCase() +
           str.substr(1);
}

export function remove(str:string, start:number,
                                   end:number) {
    return str.substring(0, start) +
           str.substring(end);
}

export function removeTo(str:string, search:string,
                                     offset:number = 0) {
    return str.substr(str.indexOf(search) + offset);
}

export function removeLastTo(str:string, search:string,
                                         offset:number = 0) {
    return str.substr(str.lastIndexOf(search) + offset);
}

export function removeFrom(str:string, search:string,
                                       offset:number = 0) {
    return str.substr(0, str.indexOf(search) + offset);
}

export function removeLastFrom(str:string, search:string,
                                           offset:number = 0) {
    return str.substr(0, str.lastIndexOf(search) + offset);
}

export function pad(str:string, length:number, char:string = ' ')
{
    const padding = createPadding((length - str.length) * 0.5 | 0, char);
    return padding +
           str.substring(0, length) +
           padding;
}

export function padStart(str:string, length:number, char:string = ' ') {
    return createPadding(length - str.length, char) +
           str.substring(0, length);
}

export function padEnd(str:string, length:number, char:string = ' ') {
    return str.substring(0, length) +
           createPadding(length - str.length, char);
}

function createPadding(length:number, char:string = ' ')
{
    let padding = '';
    for (let i = length; i-- > 0;) {
        padding += char;
    }
    
    return padding;
}
