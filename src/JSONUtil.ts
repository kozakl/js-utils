export default class JSONUtil
{
    public static transformsDate<T extends ContainDate>(data:Normalized<T>)
    {
        data.all.map((id)=>
            data.byId[id].date = new Date(data.byId[id].date.toString()));
        return data;
    }
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
