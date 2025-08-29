// ========================================
// TypeScript 基础语法
// ========================================

console.log("=== TypeScript 基础语法 ===");

// 1. 基本类型注解
console.log("\n1. 基本类型注解:");

// 数字类型
let age: number = 25;
let height: number = 175.5;
console.log("年龄:", age, "身高:", height);

// 字符串类型
let name: string = "张三";
let message: string = `你好，${name}`;
console.log("姓名:", name, "消息:", message);

// 布尔类型
let isStudent: boolean = true;
let isWorking: boolean = false;
console.log("是学生:", isStudent, "在工作:", isWorking);

// 数组类型
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["张三", "李四", "王五"];
console.log("数字数组:", numbers, "名字数组:", names);

// 元组类型
let person: [string, number, boolean] = ["张三", 25, true];
console.log("元组:", person);

// 2. 对象类型
console.log("\n2. 对象类型:");

// 对象类型注解
let user: {
    name: string;
    age: number;
    email?: string; // 可选属性
} = {
    name: "李四",
    age: 30
};

console.log("用户对象:", user);

// 3. 接口 (Interface)
console.log("\n3. 接口:");

// 定义接口
interface Person {
    name: string;
    age: number;
    email?: string;
    readonly id: number; // 只读属性
}

// 实现接口
let person1: Person = {
    name: "王五",
    age: 28,
    id: 1001
};

console.log("接口实现:", person1);

// 接口继承
interface Employee extends Person {
    department: string;
    salary: number;
}

let employee: Employee = {
    name: "赵六",
    age: 32,
    id: 1002,
    department: "技术部",
    salary: 8000
};

console.log("继承接口:", employee);

// 4. 函数类型
console.log("\n4. 函数类型:");

// 函数类型注解
function add(a: number, b: number): number {
    return a + b;
}

// 箭头函数类型
const multiply: (a: number, b: number) => number = (a, b) => a * b;

// 函数接口
interface MathFunc {
    (a: number, b: number): number;
}

const divide: MathFunc = (a, b) => a / b;

console.log("加法:", add(5, 3));
console.log("乘法:", multiply(4, 6));
console.log("除法:", divide(10, 2));

// 5. 联合类型和类型守卫
console.log("\n5. 联合类型和类型守卫:");

// 联合类型
let value: string | number = "hello";
value = 42; // 可以重新赋值为数字

// 类型守卫
function processValue(val: string | number): string {
    if (typeof val === "string") {
        return val.toUpperCase();
    } else {
        return val.toString();
    }
}

console.log("处理字符串:", processValue("hello"));
console.log("处理数字:", processValue(42));

// 6. 类型别名 (Type Aliases)
console.log("\n6. 类型别名:");

// 基本类型别名
type Point = {
    x: number;
    y: number;
};

type ID = string | number;

let point: Point = { x: 10, y: 20 };
let userId: ID = "user123";
let productId: ID = 456;

console.log("点坐标:", point);
console.log("用户ID:", userId);
console.log("产品ID:", productId);

// 7. 枚举 (Enums)
console.log("\n7. 枚举:");

// 数字枚举
enum Direction {
    North = 0,
    South = 1,
    East = 2,
    West = 3
}

// 字符串枚举
enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}

let currentDirection: Direction = Direction.North;
let userStatus: Status = Status.Active;

console.log("当前方向:", currentDirection, Direction[currentDirection]);
console.log("用户状态:", userStatus);

// 8. 泛型 (Generics)
console.log("\n8. 泛型:");

// 泛型函数
function identity<T>(arg: T): T {
    return arg;
}

// 泛型接口
interface Container<T> {
    value: T;
    getValue(): T;
}

// 泛型类
class Box<T> {
    private content: T;

    constructor(value: T) {
        this.content = value;
    }

    getValue(): T {
        return this.content;
    }

    setValue(value: T): void {
        this.content = value;
    }
}

let stringBox = new Box<string>("Hello");
let numberBox = new Box<number>(42);

console.log("字符串盒子:", stringBox.getValue());
console.log("数字盒子:", numberBox.getValue());

// 9. 命名空间
console.log("\n9. 命名空间:");

namespace Geometry {
    export interface Point {
        x: number;
        y: number;
    }

    export function distance(p1: Point, p2: Point): number {
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

let p1: Geometry.Point = { x: 0, y: 0 };
let p2: Geometry.Point = { x: 3, y: 4 };
console.log("距离:", Geometry.distance(p1, p2));

// 10. 模块
console.log("\n10. 模块:");

// 导出接口
export interface User {
    id: number;
    name: string;
    email: string;
}

// 导出函数
export function createUser(name: string, email: string): User {
    return {
        id: Date.now(),
        name,
        email
    };
}

// 默认导出
export default class UserService {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
    }

    getUser(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    getAllUsers(): User[] {
        return this.users;
    }
}

console.log("=== TypeScript 基础语法学习完成 ===");
