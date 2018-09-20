export function transformDates<T extends ContainDate>(data:T[])
{
    data.forEach((item)=>
        item.date = new Date(item.date.toString()));
    return data;
}

interface ContainDate {
    date:Date;
}
