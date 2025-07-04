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


// enum Status {
//   Success = 200,
//   NotFound = 404,
//   ServerError = 500
// }

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




// -----------------

// type cannot be reopened once declared.
// type Geeks = {
//   name: string;
//   age: number;
// };

// type MoreGeeks = {
//   email: string;
// };

// type CombinedGeeks = Geeks & MoreGeeks;

//interface can be reopened (merged):
// interface Geeks{
//   name: string;
//   age: number;
// }

// interface Geeks{
//   email:string
// }



//interface and type can be used to define the shape of an object, 
// interface supports extends 
// interface Person {
//   name: string;
// }

// interface Employee extends Person {
//   employeeId: number;
// }


// ✅ type supports intersection: (&)
// type Person = { name: string };
// type Employee = Person & { employeeId: number };


// type can represent union, intersection, primitive, tuple, etc.
// type Status = "active" | "inactive"; // ✅ Valid
