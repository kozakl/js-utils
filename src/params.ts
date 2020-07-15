export default function params(query:Query) {
    return Object.entries(query).map(([key, value])=>
        value != null &&
            `${key}=${encodeURIComponent(<string>value)}`)
        .filter(value => value)
        .join('&');
}

interface Query {
    [key:string]:boolean|number|string;
}
