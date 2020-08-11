function sum(a, b) {
  return a + b;
} // sum(100, 90);
// sum('100', 80);

/**
 * 推斷出這個類型【錯誤】提示
 */


function square(n) {
  return n * n;
} // square(100);
// let num:number = 100;
// num = '100'; //錯誤提示

/**
 * 只允許 函數返回 類型; 如果沒有返回值可以給類型 void
 */


function foo() {
  return 100;
}
/**
 * primitive types 
 * [string, number, boolean, null, underfined, symbol]
 */


const name = 'DecadeHew';
const age = 21;
const isCheck = true;
const empty = null;
const no = undefined;
const unique = Symbol();
/**
 * array types
 */

const arr1 = [1, 2, 3]; // 陣列中只能是數字

const arr2 = [1, 2, 3];
const arr3 = ['name', 21]; // 固定陣列 length

/**
 * object types
 */

const obj1 = {
  name: 'DecadeHew',
  age: 21
};
const obj2 = {
  name: 'DecadeHew'
}; // 加？表示可有可無
// 初始化 obj，後面在對 obj 進行添加 key-value

const obj3 = {};
obj3.name = 'DecadeHew'; // obj3.age = 21; // 不被允許，因為你的 value 必須是 string

/**
 * function types
 * void 沒有返回值
 */

function fn(callback) {
  callback('string', 100);
}

fn(function (a, b) {
  console.log(a, b);
});
/**
 * special types
 * 
 */

const a = 'foo';
const type = 'success';
const b = 100; // b 變數可以是 string 或者 number
// 使用 type 聲明類型

const c = 'yes'; // mayber 類型

const gender = null; // 表示除了 number 之外，還可以接受 null 或 undefined

/**
 * Mixed 和 any 類型
 * any: 弱類型 (兼容舊代碼可能性)
 * mixed: 強類型 (具體/確定類型)
 */
// mixed 可以接收任意類型的值

function mixedValue(value) {}

mixedValue(100);
mixedValue('yes'); // any 可以接收任意類型的值

function anyValue(value) {}

anyValue(100);
anyValue('yes');
/**
 * built-in API
 */

const element = document.getElementById('app');