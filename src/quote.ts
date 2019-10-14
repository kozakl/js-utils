export default function quote(obj:any)
{
    if (typeof obj === 'object') {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                obj[key] = `'${obj[key]}'`;
            }
        }
        return obj;
    } else if (obj) {
        return `'${obj}'`;
    } else {
        return null;
    }
}
