// ========================================
// JavaScript 基础练习题
// ========================================

console.log("=== JavaScript 基础练习题 ===");

// 练习 1: 变量和数据类型
console.log("\n练习 1: 变量和数据类型");

// 1.1 声明不同类型的变量
// TODO: 声明一个字符串变量 name，值为你的名字
// TODO: 声明一个数字变量 age，值为你的年龄
// TODO: 声明一个布尔变量 isStudent，值为 true 或 false
// TODO: 声明一个数组变量 hobbies，包含你的爱好

// 1.2 类型转换
// TODO: 将字符串 "123" 转换为数字
// TODO: 将数字 42 转换为字符串
// TODO: 检查 "hello" 的布尔值

// 练习 2: 函数
console.log("\n练习 2: 函数");

// 2.1 基本函数
// TODO: 编写一个函数 calculateArea，计算矩形的面积
// TODO: 编写一个箭头函数 greet，接受名字参数并返回问候语

// 2.2 高阶函数
// TODO: 编写一个函数 filterArray，接受数组和回调函数，返回过滤后的数组
// TODO: 编写一个函数 createMultiplier，返回一个将数字乘以指定因子的函数

// 练习 3: 控制流
console.log("\n练习 3: 控制流");

// 3.1 条件语句
// TODO: 编写一个函数 checkGrade，根据分数返回等级 (A, B, C, D, F)
// TODO: 使用 switch 语句编写一个函数 getDayName，根据数字返回星期几

// 3.2 循环
// TODO: 使用 for 循环计算 1 到 10 的和
// TODO: 使用 while 循环找出第一个能被 7 整除的数
// TODO: 使用 forEach 将数组中的每个数字翻倍

// 练习 4: 数组和对象
console.log("\n练习 4: 数组和对象");

// 4.1 数组操作
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO: 使用 map 创建一个新数组，包含原数组每个元素的平方
// TODO: 使用 filter 创建一个新数组，只包含偶数
// TODO: 使用 reduce 计算数组的总和

// 4.2 对象操作
const students = [
    { name: "张三", age: 20, grade: 85 },
    { name: "李四", age: 22, grade: 92 },
    { name: "王五", age: 21, grade: 78 }
];

// TODO: 找出成绩最高的学生
// TODO: 计算所有学生的平均年龄
// TODO: 创建一个新数组，只包含成绩大于 80 的学生

// 练习 5: ES6+ 特性
console.log("\n练习 5: ES6+ 特性");

// 5.1 解构赋值
const person = {
    name: "赵六",
    age: 25,
    city: "北京",
    hobbies: ["读书", "游泳", "编程"]
};

// TODO: 使用解构赋值提取 name 和 age
// TODO: 使用解构赋值提取 hobbies 数组的第一个元素

// 5.2 模板字符串
// TODO: 使用模板字符串创建一个包含学生信息的字符串

// 5.3 展开运算符
const fruits = ["苹果", "香蕉"];
const vegetables = ["胡萝卜", "土豆"];

// TODO: 使用展开运算符合并两个数组
// TODO: 使用展开运算符复制一个对象并修改某些属性

// 练习 6: 错误处理
console.log("\n练习 6: 错误处理");

// TODO: 编写一个函数 divideNumbers，使用 try-catch 处理除零错误
// TODO: 编写一个函数 fetchUserData，模拟异步操作并使用 Promise 处理

// 练习 7: 实际应用
console.log("\n练习 7: 实际应用");

// TODO: 编写一个简单的购物车类，包含添加商品、删除商品、计算总价等方法
// TODO: 编写一个函数 validateEmail，验证邮箱格式
// TODO: 编写一个函数 formatDate，将日期格式化为 "YYYY-MM-DD" 格式

console.log("=== 练习题完成 ===");

// 参考答案 (可以取消注释查看)
/*
// 练习 1 参考答案
let name = "张三";
let age = 25;
let isStudent = true;
let hobbies = ["读书", "编程", "运动"];

let numFromStr = parseInt("123");
let strFromNum = 42.toString();
let boolValue = Boolean("hello");

// 练习 2 参考答案
function calculateArea(width, height) {
    return width * height;
}

const greet = (name) => `Hello, ${name}!`;

function filterArray(arr, callback) {
    return arr.filter(callback);
}

function createMultiplier(factor) {
    return (number) => number * factor;
}

// 练习 3 参考答案
function checkGrade(score) {
    if (score >= 90) return 'A';
    else if (score >= 80) return 'B';
    else if (score >= 70) return 'C';
    else if (score >= 60) return 'D';
    else return 'F';
}

function getDayName(day) {
    switch(day) {
        case 1: return '星期一';
        case 2: return '星期二';
        case 3: return '星期三';
        case 4: return '星期四';
        case 5: return '星期五';
        case 6: return '星期六';
        case 7: return '星期日';
        default: return '未知';
    }
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}

let num = 1;
while (num % 7 !== 0) {
    num++;
}

numbers.forEach(num => console.log(num * 2));

// 练习 4 参考答案
const squared = numbers.map(num => num * num);
const evens = numbers.filter(num => num % 2 === 0);
const total = numbers.reduce((sum, num) => sum + num, 0);

const topStudent = students.reduce((max, student) => 
    student.grade > max.grade ? student : max
);

const avgAge = students.reduce((sum, student) => sum + student.age, 0) / students.length;

const highGrades = students.filter(student => student.grade > 80);

// 练习 5 参考答案
const { name: personName, age: personAge } = person;
const [firstHobby] = person.hobbies;

const info = `姓名: ${person.name}, 年龄: ${person.age}, 城市: ${person.city}`;

const allFood = [...fruits, ...vegetables];
const newPerson = { ...person, age: 26 };

// 练习 6 参考答案
function divideNumbers(a, b) {
    try {
        if (b === 0) throw new Error("除数不能为零");
        return a / b;
    } catch (error) {
        console.error("错误:", error.message);
        return null;
    }
}

function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve({ name: "张三", age: 25 });
            } else {
                reject(new Error("获取数据失败"));
            }
        }, 1000);
    });
}

// 练习 7 参考答案
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    addItem(item) {
        this.items.push(item);
    }
    
    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
    }
    
    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
*/
