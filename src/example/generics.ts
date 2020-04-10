// 关于泛型,动态实现对于类型的检测
// example 
// 这是一个简单的组成数组的函数
// 但是这个函数这么写只能传入number
const getArray = (value:number,times:number =5):number[]=>{
    return new Array(times).fill(value);
}
// 但如果我想传入字符串,就得迫不得已把检测的类型改为any,这样就失取了对形参和返回类型得检测
const getArray1 = (value:any,times:number =5):any[]=>{
    return new Array(times).fill(value);
}
// 这时候就需要泛型来规定告诉函数我传入得是什么类型得数据,函数根据用户传入得数据类型来做出限制,T是使用函数时外部传入得形参,如果我传入的是number,那么到时候的返回的也应该是number组成的数组,传入的是String,那么到时候的返回的也应该是string组成的数组
const getArray2 = <T>(value:T,times:number =5):T[]=>{
    return new Array(times).fill(value);
}
console.log(getArray2<number>(10,5));
console.log(getArray2<string>('10',5));
// 传入的泛型不止一个可以有多个
const getArray3 = <T,U>(value1:T,value2:U,times:number):Array<[T,U]>=>{
    return new Array(times).fill([value1,value2]);
}
console.log(getArray3<number,number>(10,10,2));


// 类型别名
type getArray4 = <T>(argus:T,times:number) => T[];
let GetArray:getArray4 = <T>(times:T,argus):T[]=>{
    return new Array(times).fill(argus);
} 
console.log(GetArray<number>(10,5));

type getArray5 = <T>(argus:T,times:number) => T[];
// 泛型约束,使用extends约束泛型,使得泛型必须字符串
interface getLength {
    length:string 
}

const getArray10 = <T extends getLength>(arg:T,times:number):T[]=>{
    return new Array(times).fill(arg);
}
getArray10({length:"5"},5)


// 泛型约束结合索引约束

// const getProps = <T, K extends keyof T>(obj:T,name:K)=>{
//     return obj[name];
// }
// let obj2 = {
//     a:"a",
//     b:"b"
// }
// getProps(obj,"a");