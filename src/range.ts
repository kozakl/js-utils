export default function range(start:number, stop:number, step = 1)
{
    const array:number[] = [];
    for (let i = start; i <= stop; i += step)
        array.push(i);
    
    return array;
}
