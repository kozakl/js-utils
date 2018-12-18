export default function params(query:Query)
{
    return Object.entries(query).map(([key, value])=>
        `${key}=${encodeURIComponent(<string>value)}`).join('&');
}

interface Query {
    [key:string]:boolean|number|string;
}
