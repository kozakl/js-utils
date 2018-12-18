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

export function transformDates<T extends ContainDate>(data:T[])
{
    data.forEach((item)=>
        item.date = new Date(item.date.toString()));
    return data;
}

export function transformNormalizedDates<T extends ContainDate>(data:Normalized<T>)
{
    data.all.map((id)=>
        data.byId[id].date = new Date(data.byId[id].date.toString()));
    return data;
}

interface ContainId {
    id:number;
}

interface ContainDate {
    date:Date;
}

interface Normalized<T> {
    byId: {
        [id:number]:T;
    }
    all:number[];
}
