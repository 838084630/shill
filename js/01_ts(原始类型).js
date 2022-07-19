"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 'xxx';
a = 'yyy';
const b = 1;
// b = 2 const不可变,它的值就是他的类型，let可变
// ts的基本类型也就是js的基本类型
// number string undefined Boolean null symbol
let num = 1;
let str = 'st';
let bool = true;
//函数
function ma() { } //○
//没有写返回值，函数类型就是void
// function mb():undefined{} //×
function mc() { return undefined; } //○
