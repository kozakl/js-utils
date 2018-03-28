/**
 * @author kozakluke@gmail.com
 */
export default function classNames(...args:string[])
{
    var names = '';
    for (var i = 0, n = args.length; i < n; i++)
        if (args[i])
            names += args[i] + ' ';
    
    return names;
}
