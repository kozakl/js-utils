export default (fn:Function, ...args:any[])=> fn.bind(null, ...args);
