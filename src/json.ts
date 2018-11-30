export function transformDates<T extends ContainDate>(data:T[] & Normalized<T>, normalized:boolean = false)
{
    if (!normalized) {
        data.forEach((item)=>
            item.date = new Date(item.date.toString()));
    }
    else {
        data.all.map((id)=>
            data.byId[id].date = new Date(data.byId[id].date.toString()));
    }
    return data;
}

export function transformDatesNormalized<T extends ContainDate>(data:Normalized<T>)
{
    data.all.map((id)=>
        data.byId[id].date = new Date(data.byId[id].date.toString()));
    return data;
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
