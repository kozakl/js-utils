export default function classNames(...args:string[])
{
    let names = '';
    for (let i = 0, n = args.length; i < n; i++) {
        if (args[i] && i != n - 1) {
            names += args[i] + ' ';
        } else if (args[i]) {
            names += args[i];
        }
    }
    
    return names;
}
