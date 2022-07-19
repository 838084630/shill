export{}

type StrNumber = string | number

let test:StrNumber = '11'
test = 11 

type ObjType = {a:number&2,b:string}

let obj:ObjType = {
    a:2,
    b:'xx'
}

// interface和type区别:
// 都可以用来自定义类型
// 类型别名支持联合和交叉类型定义
// 类型别名不支持重复定义，接口可以

interface AItf{
    a:string
}

//用类型别名保存接口上的某个属性类型
type Atype = AItf['a'];
let str2:Atype = '10'

type color='red' | 'blue' | 'green' | string & {}
let c:color = 'red'