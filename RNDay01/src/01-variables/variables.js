// ========================================
// JavaScript 变量和数据类型基础
// ========================================

console.log("=== JavaScript 变量和数据类型 ===");

// 1. 变量声明
console.log("\n1. 变量声明:");

// var (不推荐使用，存在变量提升问题)
var oldWay = "这是 var 声明";
console.log("var 声明:", oldWay);

// let (推荐使用，块级作用域)
let modernWay = "这是 let 声明";
console.log("let 声明:", modernWay);

// const (常量，不可重新赋值)
const constant = "这是 const 声明";
console.log("const 声明:", constant);

// 2. 基本数据类型
console.log("\n2. 基本数据类型:");

// 数字类型
let number = 42;
let float = 3.14;
let negative = -10;
console.log("数字类型:", number, float, negative);

// 字符串类型
let string = "Hello World";
let string2 = '单引号字符串';
let template = `模板字符串: ${number}`;
console.log("字符串类型:", string, string2, template);

// 布尔类型
let boolean = true;
let boolean2 = false;
console.log("布尔类型:", boolean, boolean2);

// 空值类型
let nullValue = null;
let undefinedValue = undefined;
console.log("空值类型:", nullValue, undefinedValue);

// 3. 复杂数据类型
console.log("\n3. 复杂数据类型:");

// 数组
let array = [1, 2, 3, 4, 5];
let mixedArray = [1, "hello", true, null];
console.log("数组:", array, mixedArray);

// 对象
let object = {
    name: "张三",
    age: 25,
    isStudent: true
};
console.log("对象:", object);

// 4. 类型检查
console.log("\n4. 类型检查:");

console.log("typeof 42:", typeof 42);
console.log("typeof 'hello':", typeof 'hello');
console.log("typeof true:", typeof true);
console.log("typeof null:", typeof null);
console.log("typeof undefined:", typeof undefined);
console.log("typeof [1,2,3]:", typeof [1,2,3]);
console.log("typeof {name: 'test'}:", typeof {name: 'test'});

// 5. 类型转换
console.log("\n5. 类型转换:");

// 字符串转数字
let strToNum = parseInt("123");
let strToFloat = parseFloat("3.14");
console.log("字符串转数字:", strToNum, strToFloat);

// 数字转字符串
let numToStr = (42).toString();
let numToStr2 = String(42);
console.log("数字转字符串:", numToStr, numToStr2);

// 布尔转换
console.log("Boolean(0):", Boolean(0));
console.log("Boolean(1):", Boolean(1));
console.log("Boolean(''):", Boolean(''));
console.log("Boolean('hello'):", Boolean('hello'));

// 6. 作用域示例
console.log("\n6. 作用域示例:");

let globalVar = "全局变量";

function scopeExample() {
    let localVar = "局部变量";
    console.log("函数内部访问全局变量:", globalVar);
    console.log("函数内部访问局部变量:", localVar);
}

scopeExample();
console.log("函数外部访问全局变量:", globalVar);
// console.log("函数外部访问局部变量:", localVar); // 这会报错

// 7. 变量提升示例
console.log("\n7. 变量提升示例:");

console.log("var 变量提升:", hoistedVar); // undefined，不会报错
var hoistedVar = "变量提升";

// console.log("let 变量提升:", hoistedLet); // 这会报错
let hoistedLet = "不会提升";

console.log("=== 变量和数据类型学习完成 ===");
