export{}

class Person{
    public myName:string  
    // public readonly myName:string 只读，无法重新赋值
    // protected myName:string   父子类可以访问，但是实例利用不了
    // private myName:string  
    constructor(n:string){
        this.myName=n
    }
    getName(){
        return this.myName
    }
}

let q = new Person('zhangsan')

class Student extends Person{
    gender:boolean
    constructor(name:string,gender:boolean){
        super(name)
        this.gender=gender
    }
    //重写
    // getName(){
    //     return this.myName
    // }
}
let m = new Student('zhao',false)