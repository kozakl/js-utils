import {formatISO} from './date';

const date = new Date();

export function timestamp(...params:any)
{
    date.setTime(Date.now());
    params.unshift(formatISO(date, 'YYYY-MM-DD HH:MM:SS') + ':');
    
    console.log.apply(null, params);
}
