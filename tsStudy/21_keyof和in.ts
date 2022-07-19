export{}

interface Person{
    name:string;
    age:number;
    [idx:number]:number;
}
type Ptype = keyof Person; //keyof后面一般跟接口，表示接口的这些属性名之一
let p1:Ptype;  //name,age,任意的number
p1 = 'name'
p1 = 'age'
p1 = 19

type StrOrNum = string | number
type PItf ={
    [k in StrOrNum]:string
}
let test:PItf={
    a:'',
    10:''
}