export{}

//抽象类 是普通类的描述，指定一个类的规范，给普通类去继承
//继承之后，普通类里面就必须定义抽象类里面的抽象属性和抽象方法
abstract class Person{
     abstract name:string
     abstract getName():string
     getAge(){
        return 18
     }
}

class Male{
    name:string='xxx'
    getName(){
        return this.name
    }
}
let l1 = new Male();


interface PersonItf{
    name:string
    age?:number
    getName:()=>void
}

class M implements PersonItf{
    name:string='e'
    getName(){

    }
}
let l2 = new M();