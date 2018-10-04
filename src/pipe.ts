export default (...args:any[])=> {
    return args.reduce((f, g)=> (...args:any[])=> g(f(...args)));
}
