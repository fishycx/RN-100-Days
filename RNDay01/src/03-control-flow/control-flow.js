// ========================================
// JavaScript 控制流基础
// ========================================

console.log("=== JavaScript 控制流基础 ===");

// 1. 条件语句
console.log("\n1. 条件语句:");

// if 语句
let age = 18;
if (age >= 18) {
    console.log("成年人");
} else {
    console.log("未成年人");
}

// if-else if-else
let score = 85;
if (score >= 90) {
    console.log("优秀");
} else if (score >= 80) {
    console.log("良好");
} else if (score >= 60) {
    console.log("及格");
} else {
    console.log("不及格");
}

// 2. 三元运算符
console.log("\n2. 三元运算符:");

let isAdult = age >= 18 ? "成年人" : "未成年人";
console.log("三元运算符结果:", isAdult);

// 嵌套三元运算符
let grade = score >= 90 ? "A" : 
           score >= 80 ? "B" : 
           score >= 60 ? "C" : "D";
console.log("成绩等级:", grade);

// 3. switch 语句
console.log("\n3. switch 语句:");

let day = "Monday";
switch (day) {
    case "Monday":
        console.log("星期一");
        break;
    case "Tuesday":
        console.log("星期二");
        break;
    case "Wednesday":
        console.log("星期三");
        break;
    case "Thursday":
        console.log("星期四");
        break;
    case "Friday":
        console.log("星期五");
        break;
    case "Saturday":
    case "Sunday":
        console.log("周末");
        break;
    default:
        console.log("未知日期");
}

// 4. 循环语句
console.log("\n4. 循环语句:");

// for 循环
console.log("for 循环:");
for (let i = 0; i < 5; i++) {
    console.log(`第 ${i + 1} 次循环`);
}

// while 循环
console.log("while 循环:");
let count = 0;
while (count < 3) {
    console.log(`while 循环第 ${count + 1} 次`);
    count++;
}

// do-while 循环
console.log("do-while 循环:");
let doCount = 0;
do {
    console.log(`do-while 循环第 ${doCount + 1} 次`);
    doCount++;
} while (doCount < 3);

// 5. for...of 循环 (ES6+)
console.log("\n5. for...of 循环:");

const fruits = ["苹果", "香蕉", "橙子"];
for (const fruit of fruits) {
    console.log("水果:", fruit);
}

// 遍历字符串
const text = "Hello";
for (const char of text) {
    console.log("字符:", char);
}

// 6. for...in 循环
console.log("\n6. for...in 循环:");

const person = {
    name: "张三",
    age: 25,
    city: "北京"
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 7. 数组方法循环
console.log("\n7. 数组方法循环:");

const numbers = [1, 2, 3, 4, 5];

// forEach
console.log("forEach:");
numbers.forEach((num, index) => {
    console.log(`索引 ${index}: ${num}`);
});

// map
console.log("map:");
const doubled = numbers.map(num => num * 2);
console.log("翻倍后:", doubled);

// filter
console.log("filter:");
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("偶数:", evenNumbers);

// reduce
console.log("reduce:");
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("总和:", sum);

// 8. break 和 continue
console.log("\n8. break 和 continue:");

// break 示例
console.log("break 示例:");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // 跳出循环
    }
    console.log(`数字: ${i}`);
}

// continue 示例
console.log("continue 示例:");
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // 跳过偶数
    }
    console.log(`奇数: ${i}`);
}

// 9. 标签语句
console.log("\n9. 标签语句:");

outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // 跳出外层循环
        }
        console.log(`i=${i}, j=${j}`);
    }
}

// 10. 逻辑运算符
console.log("\n10. 逻辑运算符:");

// && (与)
console.log("true && true:", true && true);
console.log("true && false:", true && false);

// || (或)
console.log("true || false:", true || false);
console.log("false || false:", false || false);

// ! (非)
console.log("!true:", !true);
console.log("!false:", !false);

// 短路求值
console.log("短路求值:");
const name = "张三";
const displayName = name || "匿名用户";
console.log("显示名称:", displayName);

// 11. 可选链操作符 (ES2020)
console.log("\n11. 可选链操作符:");

const user = {
    name: "李四",
    address: {
        city: "上海"
    }
};

console.log("城市:", user?.address?.city);
console.log("街道:", user?.address?.street); // undefined，不会报错

// 12. 空值合并操作符 (ES2020)
console.log("\n12. 空值合并操作符:");

const value1 = null;
const value2 = undefined;
const value3 = 0;
const value4 = "";

console.log("null ?? 默认值:", value1 ?? "默认值");
console.log("undefined ?? 默认值:", value2 ?? "默认值");
console.log("0 ?? 默认值:", value3 ?? "默认值"); // 0 不是 null 或 undefined
console.log("空字符串 ?? 默认值:", value4 ?? "默认值"); // 空字符串不是 null 或 undefined

console.log("=== 控制流基础学习完成 ===");
