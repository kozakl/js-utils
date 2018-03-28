/**
 * @author kozakluke@gmail.com
 */
export default class Cursor
{
    private static element:HTMLElement;
    private static current:string;
    
    public static init(element:HTMLElement)
    {
        this.element = element;
    }
    
    public static set(type:string)
    {
        if (this.current != type) {
            this.current = type;
            this.element.style.cursor = type;
        }
    }
}
