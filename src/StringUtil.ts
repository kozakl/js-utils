export default class StringUtil
{
    public static lowerFirst(str:string)
    {
        return str.substr(0, 1).toLowerCase() +
               str.substr(1);
    }
    
    public static upperFirst(str:string)
    {
        return str.substr(0, 1).toUpperCase() +
               str.substr(1);
    }
    
    public static removeString(str:string, start:number,
                                           end:number) {
        return str.substring(0, start) +
               str.substring(end);
    }
    
    public static replace(str:string, insert:string,
                                      start:number,
                                      end:number) {
        return str.substring(0, start) + insert +
               str.substring(end);
    }
    
    public static pad1(n:number)
    {
        if (n < 10)
            return '0' + n;
        return '' + n;
    }
    
    public static pad2(n:number)
    {
        if (n < 10)
            return '00' + n;
        else if (n < 100)
            return '0' + n;
        return '' + n;
    }
    
    public static backSearch(str:string, char:string,
                                         position:number) {
        for (let i = position; i--;) {
            if (str[i] === char)
                return i;
        }
    }
}
