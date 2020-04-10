// interface表示接口规则
// -------------接口规范---------------
interface nameInfo {
    firstName: string,
    lastName: string
};

const getFullName = ({firstName,lastName} : nameInfo) =>{
        return `${firstName} ${lastName}`;
};
getFullName({
    firstName:'aaaaa',
    lastName:'bbbbb'
});


interface Vegetable {
    // 问号表示可选形参
    color?: string ,
    // readonly设置只读属性，只能读取不能修改
    readonly type: number,
    // 对于多余属性进行处理
    [prop: string]: any
}
const getVegetableInfo = ({color,type}:Vegetable)=>{
    return ` A ${color? (color+ '') : ''} ${type}`;
};
console.log(getVegetableInfo({color:'red',type:20,size:10}));



// --------------- 规定函数规范---------------------
interface  addFunc {
    // 括号内规定传入形参的数据类型
    // 括号外规定函数返回的数据类型
    (num1:number,num2:number):number;
}
const add: addFunc = (n1,n2)=> n1 + n2;
console.log(add(10,2));

// ---------------索引规范---------------------
interface Role {
    [id:string]:number
}
const obj5 = {
    a: 'super_admin',
    b:'admin'
}

// 接口规范的继承
// 使用 extends xxx 继承xxx的属性
interface Vegetables {
    length:number,
    price:number
}
interface apple {
    size:number
}
interface orange extends Vegetables{
    color:string 
}

const orange : orange = {
    length :20,
    price : 50,
    color: 'red'
}