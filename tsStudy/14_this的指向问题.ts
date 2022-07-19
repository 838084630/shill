export{}

//ts提供了Window类型，window就是这个Window类型的对象
function Person(this:Window,name:string){
    //在ts里，需要指明this的指向，在函数的第一个形参的位置注明
    //Window类型中没有myname这个属性，所以要扩展这个属性
    this.myname = name
}

//加了export{}之后，这里就不是全局，Person不是window下的属性
window.Person = Person
window.Person("")