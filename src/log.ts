import {toISOFull} from './date';

const date = new Date();

export function timestamp(...args:string[])
{
    date.setTime(Date.now());
    args.unshift(toISOFull(date) + ':');
    
    console.log.apply(null, args);
}
