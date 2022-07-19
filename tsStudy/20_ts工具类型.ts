export{}

interface PItf{
    name:string;
    age:number;
    height?:number
}

//Partial作用；可以只拿泛型的部分属性相当于？可缺省的作用(不然就必须实现接口的所有属性和方法)
let obj:Partial<PItf>={
    name:'',
    age:14
}

//Require作用：和上面的相反，把接口里所有的作为必须项，即便是缺省的也作为必须项
let obj2:Required<PItf>={
    name:'bear',
    age:25,
    height:100
}