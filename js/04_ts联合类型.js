"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numAndString = 1;
numAndString = "str";
//这里的1|'str'即表示类型也表示值，只能是其中之一
let numAndString2 = 1;
numAndString2 = 'str'; //○
// numAndString2 = 'str1' //×
let obj; //表示obj必须是a或b且值也必须和定义的一致，或者都包含
obj = { a: 1, b: 'str' }; //○
// obj = {a:1,b:'str111'} //×
// obj = {a:1,c:2} //×
