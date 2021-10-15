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

// const name = "じゃけぇ";
// const age = 28;
// // 私の名前はじゃけぇです。年齢は28歳です。

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレートを用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

//  従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };
// const message = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message);
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myplofile = ['じゃけぇ', 28];
// const message3 = `名前は${myplofile[0]}です。年齢は${myplofile[1]}です。`;
// console.log(message3);

// const [name, age] = myplofile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello("じゃけぇ");

/**
 * スプレット構文
 */
// 配列の展開

// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumfunc = (num1, num2) => console.log(num1 + num2);
// sumfunc(arr1[0], arr1[1]);
// sumfunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー,結合

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);
