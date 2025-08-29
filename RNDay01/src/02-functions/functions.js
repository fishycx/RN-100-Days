// ========================================
// JavaScript 函数基础
// ========================================

console.log("=== JavaScript 函数基础 ===");

// 1. 函数声明
console.log("\n1. 函数声明:");

// 传统函数声明
function greet(name) {
    return `Hello, ${name}!`;
}

console.log("传统函数:", greet("张三"));

// 函数表达式
const greet2 = function(name) {
    return `Hi, ${name}!`;
};

console.log("函数表达式:", greet2("李四"));

// 2. 箭头函数 (ES6+)
console.log("\n2. 箭头函数:");

// 基本箭头函数
const greet3 = (name) => {
    return `Hey, ${name}!`;
};

console.log("箭头函数:", greet3("王五"));

// 简化箭头函数
const greet4 = name => `Yo, ${name}!`;
const add = (a, b) => a + b;

console.log("简化箭头函数:", greet4("赵六"));
console.log("加法函数:", add(5, 3));

// 3. 函数参数
console.log("\n3. 函数参数:");

// 默认参数
function greetWithDefault(name = "朋友") {
    return `Hello, ${name}!`;
}

console.log("默认参数:", greetWithDefault());
console.log("传入参数:", greetWithDefault("小明"));

// 剩余参数
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("剩余参数求和:", sum(1, 2, 3, 4, 5));

// 4. 高阶函数
console.log("\n4. 高阶函数:");

// 函数作为参数
function processArray(arr, callback) {
    return arr.map(callback);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, x => x * 2);
console.log("高阶函数示例:", doubled);

// 函数返回函数
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("双倍:", double(5));
console.log("三倍:", triple(5));

// 5. 闭包
console.log("\n5. 闭包:");

function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter = createCounter();
console.log("初始计数:", counter.getCount());
console.log("增加:", counter.increment());
console.log("增加:", counter.increment());
console.log("减少:", counter.decrement());
console.log("当前计数:", counter.getCount());

// 6. 立即执行函数 (IIFE)
console.log("\n6. 立即执行函数:");

(function() {
    console.log("这是一个立即执行函数");
})();

// 带参数的 IIFE
(function(name) {
    console.log(`Hello, ${name}!`);
})("立即执行");

// 7. 函数上下文 (this)
console.log("\n7. 函数上下文:");

const person = {
    name: "张三",
    greet: function() {
        console.log(`Hello, I'm ${this.name}`);
    },
    greetArrow: () => {
        console.log(`Hello, I'm ${this.name}`); // this 指向全局对象
    }
};

person.greet();
person.greetArrow();

// 8. 函数绑定
console.log("\n8. 函数绑定:");

const person2 = {
    name: "李四"
};

function greetPerson() {
    console.log(`Hello, ${this.name}!`);
}

const boundGreet = greetPerson.bind(person2);
boundGreet();

// 9. 递归函数
console.log("\n9. 递归函数:");

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log("5的阶乘:", factorial(5));

// 10. 异步函数
console.log("\n10. 异步函数:");

// Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("数据获取成功");
        }, 1000);
    });
}

// async/await
async function getData() {
    try {
        const result = await fetchData();
        console.log("异步结果:", result);
    } catch (error) {
        console.error("错误:", error);
    }
}

getData();

console.log("=== 函数基础学习完成 ===");
