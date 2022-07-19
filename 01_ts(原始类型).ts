export{} //变量名检测是全局的，多个文件不能重复，所以暂时先导出空处理
let a = 'xxx'
a = 'yyy'
const b = 1
// b = 2 const不可变,它的值就是他的类型，let可变
// ts的基本类型也就是js的基本类型
// number string undefined Boolean null symbol
let num:number = 1;
let str:string = 'st'
let bool:Boolean = true
//函数
function ma():void{} //○
//没有写返回值，函数类型就是void
// function mb():undefined{} //×
function mc():undefined{ return undefined } //○
