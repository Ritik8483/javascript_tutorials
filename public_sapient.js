// function add(a, b) {
//   return a + b;
// }
// console.log(add(5, "10"));
// console.log("called"); 
// function add(a: number, b: number): number {
//   return a + b;
// }
// console.log(add(5, 10));
// ------------------------
// const user = {
//   username: "ritik",
//   age: 25
// };
// // A typo here won't be caught
// console.log(user.usernme); // undefined
// interface User {
//   username: string;
//   age: number;
// }
// const user: User = {
//   username: "ritik",
//   age: 25
// };
// console.log(user.age); // ❌ Error: Property 'usernme' does not exist
// -----------------------
// define a set of named constants.
// TypeScript automatically assigns numeric values starting from 0. 
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }
// let move: Direction = Direction.Right;
// console.log("ff",move);
// var Status;
// (function (Status) {
//     Status[Status["Success"] = 200] = "Success";
//     Status[Status["NotFound"] = 404] = "NotFound";
//     Status[Status["ServerError"] = 500] = "ServerError";
// })(Status || (Status = {}));
// console.log(Status.Success);
// -------------------------------------
// Tuple : Used to define an array with fixed number of elements and specific types for each index.
// let person: [string, number] = ["Ritik", 25];
// console.log(person[0]); // Ritik (string)
// console.log(person[1]);
// -----------------------------------
// Generic : Allows writing reusable and type-safe functions or components.
// function identity<T>(value: T): T {
//   return value;
// }
// let num = identity<number>(100);   // returns 100
// let str = identity<string>("Hi");
// -------------------------------------
// Union : Allows a variable to have multiple types.
// let value: string | number;
// value = "Ritik";  // OK
// value = 42;       // OK
// value = true;
// interface objType {
//   name: string | number;
//   age: number;
// }
// const obj: objType = {
//   name: "Ritik",
//   age: 5,
// };
// console.log("helloo", obj.name);
