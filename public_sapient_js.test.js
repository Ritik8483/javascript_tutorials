// math.test.js
// const { add } = require('./public_sapient_js');
// const { json } = require("stream/consumers");
const { getAllPokimonsData } = require("./public_sapient_js");



// describe("Add Function Test",()=>{
//   test("2+2",()=>{
//     expect(add(2,2)).toBe(4)
//   })
// });

// describe('add function tests', () => {
//   test('adds 2 + 3 to equal 5', () => {
//     expect(add(2, 3)).toBe(5);
//   });

//   test('adds -1 + 1 to equal 0', () => {
//     expect(add(-1, 1)).toBe(0);
//   });

//   test('adds 0 + 0 to equal 0', () => {
//     expect(add(0, 0)).toBe(0);
//   });

//   test('adds 10 + 15 to equal 25', () => {
//     expect(add(10, 15)).toBe(25);
//   });
// });

// -----------------------------------------------
// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () =>
//       Promise.resolve({
//         results: [
//           { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
//           { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" }
//         ],
//       }),
//   })
// );

// test('should return a list of pokemons', async () => {
//   const data = await getAllPokimonsData();
//   expect(data).toEqual([
//     { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
//     { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" }
//   ]);
//   expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon?limit=50');
// });


// ----------------------------------

// global.fetch = jest.fn(()=>{
//   Promise.resolve({
//     json:()=>{
//       Promise.resolve({
//         results:[

//         ]
//       })
//     }
//   })
// })


// test("poki",async()=>{
//   const data = await getAllPokimonsData();
//   expect(data).toEqual([

//   ])
//   expect(fetch).toHaveBeenCalledWith('')
// })