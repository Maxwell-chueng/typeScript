// symbol表示独一无二不重复的值，symbol只能传入数值和字符串，能够调用toString方法，能够判断true false 能够取反进行隐式转化
let s = Symbol();
let s1 = Symbol();
console.log(s === s1); // 结果为false

// 使用Symbol独一无二的属性，可以将symbol设置为对象的属性名，由此外部的不能轻易改变对象中的属性名
// example(外部是不能修改[name]属性)
const name = Symbol('myName');
let obj1:object = {
   [name]:'zxj',
   sex:'man',
   age:24
};
// symbol默认不可枚举，使用for循环，Object.keys，Object.getOwnPropertyNames都不能得到枚举到symbol作为属性名的属性
for(const i in obj1){
    console.log(i)
}
// 使用这两种方法能够得到symbol设置的属性
console.log(Object.getOwnPropertySymbols(obj1));
console.log(Reflect.ownKeys(obj1));

// Symbol.for 方法
// 设置symbol时，即便传入相同的字符串标记但他们两也并不相等，使用symbol.for创建symbol时，系统会在全局寻找是否有使用相同的标记的symbol，如果存在那么返回，如果不存在那么新建

// let name1 = symbol.for('myName');
// name1 = name;

// Symbol.keyFor()方法
// 他会返回使用Symbol.for方法注册的symbol标识
// 不是使用Symbol.for注册的找不到