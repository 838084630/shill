export{}

//接口的继承
interface ItfA{
    name:string
    readonly score:number  //只读，不能修改
    gender?:boolean //缺省，？实现类可以不必须有该属性
}

interface ItfB{
    age:number
}
interface ItfC extends ItfA,ItfB{
  height:number
}

let aa:ItfC = {
    name:'',
    age:18,
    height:1.80,
    score:100
}
// aa.score=99 无法修改

//接口的同名，实现类都要有接口的属性
interface ItfD{
    name:string
}
interface ItfD{
    gender:boolean
}

let bb:ItfD = {
    name:'str',
    gender:false
}



