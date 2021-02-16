export function join(...args:string[]) {
    return args
        .filter((part)=>
            part && part.length)
        .map((part, index)=> {
            if (index === 0) {
                return part.trim().replace(/[\/]*$/g, '')
            } else {
                return part.trim().replace(/(^[\/]*|[\/]*$)/g, '')
            }
        })
        .join('/')
}
