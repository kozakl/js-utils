export default function escape(obj:any)
{
    if (typeof obj === 'object') {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                obj[key] = `'${obj[key]}'`;
            }
        }
        return obj;
    } else {
        return `'${obj}'`;
    }
}
