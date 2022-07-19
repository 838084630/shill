export{}
//interface 用来自定义类型的
//  定义接口类型 ---给对象用
interface MyInf{
    //属性名 值的属性
    name:string;
    age:number;
    height:number
}
let xx:MyInf = {
    name:'zhangsan',
    age:18,
    height:120
}

//  定义接口类型 ---给数组用
interface ArrItf{
    [idx:number]:number|string
}
let arr:ArrItf = [1,2,'str']

//  定义接口类型 ---给函数用
interface FnItf{
    (p:string,w:number):void
}
let fn:FnItf = (p:string,w:number) => {}

fn('xx',1)