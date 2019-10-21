export default function quote(obj:any)
{
    if (typeof obj === 'object') {
        for (const key in obj) {
            if (obj[key]) {
                obj[key] = `'${obj[key]}'`;
            }
        }
        return obj;
    } else if (obj || obj === 0) {
        return `'${obj}'`;
    } else {
        return null;
    }
}
