/**
 * @author kozakluke@gmail.com
 */
export default class Pool
{
    private static pools:any[] = [];
    
    public static get<T>(Type:Constructor<T>, ...args:any[])
    {
        const pool = this.getPool(Type);
        if (pool.length > 0)
            return pool.pop();
        else
        {
            if (args.length < 1)
                return new Type();
            else
            {
                switch (args.length)
                {
                    case 1: return new Type(args[0]);
                    case 2: return new Type(args[0], args[1]);
                    case 3: return new Type(args[0], args[1], args[2]);
                    case 4: return new Type(args[0], args[1], args[2], args[3]);
                    default: return new Type(args[0], args[1], args[2], args[3], args[4]);
                }
            }
        }
    }
    
    private static getPool(Type:any)
    {
        return this.pools[Type] || (this.pools[Type] = []);
    }
    
    public static free<T>(Type:Constructor<T>, ...args:T[]):T
    {
        this.getPool(Type).push(...args);
        return args[0];
    }
}

type Constructor<T> = {
    new(...args:any[]):T;
};
