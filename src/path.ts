export function join(...args:string[]) {
    return args.map((part, index)=> {
        if (index === 0) {
            return part.trim().replace(/[\/]*$/g, '')
        } else {
            return part.trim().replace(/(^[\/]*|[\/]*$)/g, '')
        }
    }).filter((x)=> x.length).join('/')
}
