export{}

//接口定义函数类型
interface FnItf{
    (p:number):number
}
let fn:FnItf = (p:number) => {
    return 1
}
fn(10)

//类型别名定义函数
type FnType = (p:number) => string
let fn2:FnType = (p:number):string => { return 'test'}
fn2(1)



//函数作为对象的属性出现的时候
//接口写法
interface ObjItf{
    fn:FnItf
}

let xx:ObjItf = {
    fn:(str)=>{
        return 1
    }
}
xx.fn(1)

//类型别名写法
type ObjType = {fn:(p:string)=>number}
let ob:ObjType = {
    fn:(str)=>{
        return 1
    }
}
ob.fn('xx')

