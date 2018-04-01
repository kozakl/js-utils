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
    
    public static removeNull<T>(array:T[], allowReverse:boolean = false):T[]
    {
        var nullCount = 0           ;
    var length    = array.length ;
    for (var i=0, len=array.length; i<len; i++) { if (!array[i]) {nullCount++} }
    // no item is null
    if (!nullCount) { return array}
    // all items are null
    if (nullCount == length) { array.length = 0; return array }
    // mix of null // non-null
    var idest=0, isrc=length-1;
    length -= nullCount ;                
    while (true) {
         // find a non null (source) slot on the right
         while (!array[isrc])  { isrc--; nullCount--; } 
         if    (!nullCount) { break }       // break if found all null
         // find one null slot on the left (destination)
         while ( array[idest]) { idest++  }  
         // perform copy
         array[idest]=array[isrc];
         if (!(--nullCount)) {break}
         idest++;  isrc --; 
    }
    array.length=length; 
        if (allowReverse)
            return array;
        else
            return this.reverse(array);
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
