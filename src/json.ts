export function normalize<T extends ContainId>(data:T[])
{
    const normalized:Normalized<T> = {
        byId: {},
        all: []
    };
    data.forEach((item)=> {
        normalized.byId[item.id] = item;
        normalized.all.push(item.id);
    });
    
    return normalized;
}

export function transformDates<T extends any>(data:T[], key:string = 'date')
{
    data.forEach((item)=>
        item[key] =
            item[key] && new Date(item[key]));
    return data;
}

export function transformNormalizedDates<T extends any>(data:Normalized<T>, key:string = 'date')
{
    data.all.map((id)=>
        data.byId[id][key] =
            data.byId[id][key] && new Date(data.byId[id][key]));
    return data;
}

interface ContainId {
    id:number;
}

interface Normalized<T> {
    byId: {
        [id:number]:T;
    }
    all:number[];
}
