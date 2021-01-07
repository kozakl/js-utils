export function setParams(query:Query) {
    return Object.entries(query).map(([key, value])=>
        value != null &&
            `${key}=${encodeURIComponent(<string>value)}`)
        .filter(value => value)
        .join('&');
}

export function getParam(url = window.location.search, param:string) {
    const params = new URLSearchParams(url);
    return params.get(param);
}

export function getParams(url = window.location.search) {
    return new URLSearchParams(url);
}

interface Query {
    [key:string]:boolean|number|string;
}
