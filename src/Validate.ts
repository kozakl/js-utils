export default class Validate
{
    public static isFill(str:string)
    {
        return /\S/.test(str);
    }
    
    public static isEmail(str:string)
    {
        return /\S+@\S+\.\S+/.test(str);
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
}
