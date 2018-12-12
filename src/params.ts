export default function params(query:Query) {
    return Object.entries(query).map(([key, value])=>
        `${key}=${encodeURIComponent(value)}`).join('&');
}

interface Query {
    [key:string]:string;
}
