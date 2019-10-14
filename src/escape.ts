export default function escape(obj:any)
{
    console.log('escape is deprecated now, use quote instead');
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
