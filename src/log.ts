import {toISOFull} from './date';

const date = new Date();

export function timestamp(...params:any)
{
    date.setTime(Date.now());
    params.unshift(toISOFull(date) + ':');
    
    console.log.apply(null, params);
}
