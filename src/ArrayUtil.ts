/**
 * @author kozakluke@gmail.com
 */
export default class ArrayUtil
{
    public static shuffle<T>(array:T[])
    {
        for (let i = array.length; i--;)
        {
            const j = Math.random() * (i + 1) | 0,
                  t = array[i];
            array[i] = array[j];
            array[j] = t;
        }
        
        return array;
    }
    
    public static join<T>(array:T[], separator:string,
                                     start:number = 0) {
        let str = '';
        const n = array.length;
        for (let i = start; i < n; i++)
            str += array[i] + (i != n-1 ? separator : '');
        
        return str;
    }
    
    public static removeNull<T>(array:T[]):T[]
    {
        for (let i = array.length; i--;) {
            if (!array[i])  
                array.splice(i, 1);
        }
        
        return array;
    }
    
    public static reverse<T>(array:T[]):T[]
    {
        var length = array.length;
        var left = null;
        var right = null;
        for (left = 0; left < length / 2; left += 1)
        {
            right = length - 1 - left;
            var temporary = array[left];
            array[left] = array[right];
            array[right] = temporary;
        }
        
        return array;
    }
}
