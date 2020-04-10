// 定义布尔类型
let bool:boolean = false;
bool = true;
// 数值类型
let num:number = 123;
// 字符串类型
let str:string = 'asda';
let str2:string = `我就是${str}`;
// console.log(str2);
// 数组类型
// 声明了一个数组，里面允许存在number类型的数值
let arr1 : number[] = [1,2,3,4];
// 声明了一个数组，里面允许存在number类型的数值
let arr2 : Array<number> = [12,123];
// 声明了一个数组，里面允许存在number类型和字符串类型
let arr3 : (string | number)[] = [1,2,'asdfasd'];

// 元组类型
// 元组类型限制了数组的长度，要求数组的长度必须与赋值的长度想匹配，数值类型也必须一一对应
let tuple : [string,number,boolean];
tuple = ['1565',1321,true];

// 枚举类型
// 能够为每一项单独设置索引，默认索引从0开始
enum Roles {
    super_admin,
    admin,
    user
}
console.log(Roles.super_admin,Roles.admin,Roles.user);
console.log(Roles[0],Roles[1],Roles[2]);
// 当为某一项单独设置了索引之后，下一项属性的索引从从该属性的开始+1开始，而之前的索引依旧从0开始
enum zxj {
    sex,
    name = 5,
    age
}
console.log(zxj.sex,zxj.name,zxj.age);

// any类型
// any类型接受任何类型的值
let value : any = 123;
let val : any = false;
let val2 : any = 'asdas';
// 给const赋值最好初始化一个数据类型
const val3 : any[] = [456,'asdas'];
console.log(val3);

// void类型
// void类型只能赋值两个类型，undefined和null，当函数没有返回值时，默认为undefined或者null，所以函数的返回值类型设置为void
// 将null赋值给void时，如果出现报错，大概率是tsconfig.json文件的strictNullChecks为true;
let a:void = null;
let a1:void = undefined;

// undefined和null类型
// undefined和null是所有类型的子类型，可以将undefined和null赋值给任何类型的数据
// 开启严格模式后不能将不允许不同类型的至今相互赋值，undefined和null将不能赋值给其他类型

// never类型
// never类型代表从来不会出现的值的类型，是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型
// never可以赋值给任何类型，但是任何类型不能赋值给never
// 涉及到抛出错误或者死循环的设置返回值为never可以在程序运行的时候抛出错误提示开发者
let n:never;
let numb:number = 312312;
numb = n;

// object类型
let obj = {name:'zxj'};
function consoleObj (obj:object) : void{
      console.log(obj);
}
consoleObj(obj);

// 类型断言
// 使用断言有两种方式
// 1. (<string>target).length 使用<string>对target的类型断言为string
// 2.(target as string).length 使用 xxx as string 将target指定为string，推荐这种使用方式，前者的书写方式像在书写html标签可能产生混淆
// 对已经声明类型的变量做强制转换
// 我们在声明形参时已经设置target为数值或者字符串类型，
// 但是到了if判断中数值类型并没有length，此时便会报错，我们强制将if判断中target的形参指定为string类型，此时便不会在产生错误
function getLength(target:number | string):number{
    if((<string>target).length || (target as string).length === 0){
        return (target as string).length;
    }else{
        return target.toString().length;
    }
}
let result:number = getLength('1352165as4dasdsadas4tpok3eo');
console.log(result);