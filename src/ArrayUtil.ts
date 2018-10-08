export default class ArrayUtil
{
    public static shuffle<T>(array:T[])
    {
        for (let i = array.length; i--;) {
            const j = Math.random() * (i + 1) | 0,
                  t = array[i];
            array[i] = array[j];
            array[j] = t;
        }
        
        return array;
    }
    
    public static removeNull<T>(array:T[]):T[]
    {
        for (let i = array.length; i--;) {
            if (!array[i])  
                array.splice(i, 1);
        }
        
        return array;
    }
}
