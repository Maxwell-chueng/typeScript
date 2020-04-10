// 函数接口的写法
// 写法一
interface func{
    // 两个形参都默认为数值类型,其中第二个为可选形参,返回值为number
    (x:number,y?:number) : number   
}
let totalNumber:func = (x,y)=>{
    return x + y;
}
let getTotal =  totalNumber(10,2);
console.log(getTotal);
// 写法二
let func2 = (x:number,y?:number):number => {
       return x + y;
}
let getTotal2 = func2(10,10);
console.log(getTotal2);
// 写法三
type func3 = (x:number,y:number)=>number;
let getTotal3:func3 = (x,y)=>{
    return x + y;
}
let total = getTotal3(30,30);
console.log(total);

// 接收剩余参数
let func4 = (arg1:number,...args: number[])=>{
    console.log(arg1);
    console.log(args);
}
func4(10,5,5,21,484,1,3,31);

// 函数重载(只能使用function)
function get(num:string):string[]
function get(num:number):number[]
function get(num:any):any{
    if(typeof num === 'string') return num.length;
    else if(typeof num === 'number') return num.toString().split('..');
}

console.log(get(1221))
