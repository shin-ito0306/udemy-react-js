// var var1 = "var変数";
// console.log(var1);

// // var変数は上書き可能
// var1 = "var変数を上書き";
// console.log(var1);

// // var変数は再宣言が可能
// var var1 = "var変数を再宣言";
// console.log(var1);

// let var2 = "let変数";
// console.log(var2);

// // letは上書きが可能
// var2 = "let変数を上書き";
// console.log(var2);

// // letは再宣言不可能
// let var2 = "let変数を再宣言";

// const var3 = "const変数";
// console.log(var3);

// // const変数は上書き不可
// // var3 = "const変数上書き";

// const var3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const var4 = {
//   name: "じゃけぇ",
//   age: 28
// };

// var4.name = "jak";
// var4.address = "hirosima";
// console.log(var4);

// constで定義した配列はプロパティの変更が可能
// const var5 = ["dog", "cat"];
// var5[0] = "bard";
// var5.push("monkey");
// console.log(var5);

/**
 * テンプレート文字列
 */

const name = "じゃけぇ";
const age = 28;
// 私の名前はじゃけぇです。年齢は28歳です。

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// テンプレートを用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);
