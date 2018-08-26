export default class StringUtil
{
    public static isFill(str:string)
    {
        return /\S/.test(str);
    }
    
    /**
     * @deprecated since version 2.0
     */
    public static isValidEmail(str:string)
    {
        console.warn('isValidEmail is deprecated use isEmail instead');
        return /\S+@\S+\.\S+/.test(str);
    }
    
    public static isEmail(str:string)
    {
        return /\S+@\S+\.\S+/.test(str);
    }
    
    public static firstToLower(str:string)
    {
        return str.substr(0, 1).toLowerCase() +
               str.substr(1);
    }
    
    public static firstToUpper(str:string)
    {
        return str.substr(0, 1).toUpperCase() +
               str.substr(1);
    }
    
    public static remove(str:string, start:number,
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
    
    public static toBoolean(str:string)
    {
        switch (str) {
            case 'true':
            case '1':
                return true;
            default:
                return false;
        }
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
    
    public static backSearch(str:string, searchChar:string,
                                         position:number) {
        for (let i = position; i--;) {
            if (str[i] === searchChar)
                return i;
        }
    }
}
