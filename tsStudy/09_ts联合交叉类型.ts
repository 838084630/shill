export{}

//必须满足|前后的其中之一3 
let obj:{name:string}&{age:number} | {name:number}&{age:string}

obj = {
 name:'tony',
 age:18   
}

obj = {
    name:11,
    age:'18'   
   }