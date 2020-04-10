// 使用ES6中的class 定义类
// 1.public修饰符能够被外部访问和修改的属性
// 2.private 修饰符只能在类的内部使用，外部不能访问、修改、调用
// 3.protected修饰符外部能够调用它的方法和访问，但是不能修改
// 4.给 constructor加上protected可以使得这个类不能够被实例化
// 5.readonly也能够限制属性为只读属性不能被修改，但readonly不是修饰符，加上readonly之后还得在前面加上protected或者private或者public
/** 6.参数属性 ，在constructor函数形参接受入口使用三个修饰符之一限定形参，
        作用：
            在给constructor传入形参之前，一般都会在实例上用this绑定设置属性，然后再通过形参传入constructor中，例如在实例上this.xx = xxx，
            在这种情况下，如果我们在constructor中使用修饰符接受形参，我们便不用再实例上用this去一一绑定属性，再传入constructor中，因为使用修饰符接受形参，他会帮我们自动在实例上创建属性
/** 
/** 7.static关键字 
       使用static关键字修饰的函数和属性只能被构造函数本身访问，不能被实例继承和使用
            example: 
                有一个class名为 parent parent上有个属性或者函数名为 func ,  parent实例化后名为 p1 ,我们通过p1.func不能访问(即不能通过实例访问),只能通过parent.func访问
 **/
/** 8.可选参数属性
        在属性名后加问号,使得参数变成可选参数
           可选参数必须放在必选参数后面
**/
class Point {
    // 没有使用形参修饰符需要在实例上手动设置属性
    // private readonly x:number
    // private readonly y:number
    // 使用了形参修饰符就不需要上面两行代码
    constructor(
        private readonly x:number, 
        private readonly y:number,
        private readonly z:number = 20){
        this.x = x;
        this.y = y;
    }
    public getPosition(){
        return `(${this.x} , ${this.y} , ${this.z})`;
    }
}

// 使用 extends和super继承父类的方法
// 使用get和set方式，类似于Object.definedProperty中的getter和setter
class Child extends Point{
    public name:string
    public age : string
    constructor(x:number,y:number){
        super(x,y)
    }
    get getLocation() {
        return `(${this.name},${this.age})`;
    }
    set setLocation(newVal) {
        console.log(newVal)
        this.name = `${newVal}像周杰伦`;
        this.age = "今年18岁";
    }
}

let p1 = new Child(10,3);
p1.name = 'zxj';
p1.setLocation = 'zxj';
console.log(p1.getPosition());
console.log(p1.getLocation);
// console.log(p1.getLocation);


// 使用abstract创建的类为抽象类，创建的方法为抽象方法，抽象类只能被用来继承，无法实例化

abstract class People {
    student:number
    teacher:number
    name:string
    constructor(name:string){
        this.name = name;
    }
    public abstract printName():void
}
class man extends People{
    constructor(name:string){
        super(name);
        this.name = name;
    }
    public printName(){
        console.log(this.name);
    }
}
let pp = new man('zxj111');
console.log(pp.printName());
