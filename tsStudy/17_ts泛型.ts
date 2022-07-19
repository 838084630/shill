export{}

function fn(n:number):number{
    return n
}

//泛型，可以理解为类型的参数，T是一个标识符，可以自定义，T表示某种类型
//类型参数化
function fn1<T>(n:T):T{
    return n
}
fn1<number>(1)


//泛型，类型别名和接口 

//不用泛型，类型直接写在类型别名或接口里写法
//类型别名
type ObjType = {
    name:string,
    getName:()=>number
}
let obj:ObjType={
    name:'murphy',
    getName(){
        return 1
    }
}
//接口
interface xx {
    name:string,
    getName:()=>number
}
let obj2:xx= {
  name:'lagx',
  getName:()=>1
}

//用泛型写法
//类型别名
type ObjType1<N,G> = {
    name:N,
    getName:()=>G
}
let obj1:ObjType1<string,number>={
    name:'murphy',
    getName(){
        return 1
    }
} 
//接口
interface xx1<N,G>{
    name1:N,
    getName1:()=>G
}
let obj4:xx1<string,number>= {
  name1:'lagx',
  getName1(){
    return 2
  }
}


//泛型约束
//需求：name只接受string或number用继承实现约束类型
type ty = string|number
interface PersonItf<N extends ty,G>{
    name:N,
    getName:()=>G
}
let ss:PersonItf<string,number> = {
    name:'www',
    getName() {
        return 1
    },
}