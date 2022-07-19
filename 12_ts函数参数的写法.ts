export{}

//默认参数 参数名:number=3 这个参数的默认值是3

function fn(a:number,b:number=3){
    return a+b
}
console.log(fn(1,2)) //3 1+2
console.log(fn(5))  //8 5+3

//缺省参数?
function fn1(a:number,b?:number){
    return 1
}
console.log(fn(1,2)) //1
console.log(fn(5))  //1

//剩余参数 ...
function fn2(a:number,b:number,...arr:number[]){
    console.log(a,b) //1,2
    console.log(arr) //3,4,5
}
fn2(1,2,3,4,5)

let obj1 = {a:1,b:2,c:[1,2,3]}
let obj2 = {...obj1} //浅拷贝
obj1.a = 100
obj1.c[0] = 1000
console.log(obj1)
console.log(obj2)
