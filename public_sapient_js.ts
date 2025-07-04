// const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=10";

// // Custom hook-like function
// async function useFetchPokemon(url) {
//   const statusElement = document.getElementById("status");
//   const container = document.getElementById("pokemon-container");

//   statusElement.textContent = "Loading...";

//   try {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error("Failed to fetch");

//     const data = await response.json();

//     statusElement.textContent = ""; // Clear loading

// data.results.forEach(pokemon => {
//   const card = createPokemonCard(pokemon.name);
//   container.appendChild(card);
// });
//   } catch (error) {
//     statusElement.textContent = "Error fetching data!";
//     console.error(error);
//   }
// }

// // Card creation
// function createPokemonCard(name) {
//   const card = document.createElement("div");
//   card.className = "card";
//   card.textContent = name;
//   return card;
// }

// // Trigger fetch on page load
// document.addEventListener("DOMContentLoaded", () => {
//   useFetchPokemon(API_URL);
// });

// ---------------------Ritik------------------

// const api = "https://pokeapi.co/api/v2/pokemon?limit=10";
// console.log("status", api);
// async function getAllPokimons(params) {
//   //  const statusElement = document.getElementById("status");
//   const status = document.getElementById("status");
//   const container = document.getElementById("pokemon-container");
//   status.textContent = "loading";
//   try {
//     const resp = await fetch(params);
//     const respJSON = await resp.json();
//     respJSON?.results.forEach((pokemon) => {
//       const card = document.createElement("div");
//       container.appendChild(card);
//       card.className = "card";
//       card.textContent = pokemon.name;
//     });
//     status.textContent = "";
//   } catch (error) {
//     console.log("error", error);
//     status.textContent = "error";
//   }
//   console.log("status", status);
//   console.log("params", params);
// }

// document.addEventListener("DOMContentLoaded", () => {
//   getAllPokimons(api);
// });

// const button = document.querySelector(".hellopoki");
// button.addEventListener("click", () => {
//   alert("You clicked the Hello Pokimons button!");
// });

// -----------------------------------------------------

// const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=10";
// console.log("API_URL",API_URL);

// const pokimon_box = document.getElementById("pokimon_box");

// async function fetchAllPokimons(url){
//   try {
//     const resp = await fetch(url);
//     const respJson = await resp.json();
//     console.log("respJson",respJson?.results);

//     respJson?.results?.forEach((element) => {
//       const createChild = document.createElement("div");
//       pokimon_box.appendChild(createChild)
//       createChild.innerText = element.name;
//       createChild.className = 'card-component'
//     });
//   } catch (error) {
//     console.log("error",error);
//   }
// }

// document.addEventListener("DOMContentLoaded",()=>{
//   fetchAllPokimons(API_URL)
// })

// fetchAllPokimons(API_URL)
// console.log("pokimon_box",pokimon_box);

// --------------------------------2nd-----------------------------------------

// console.log("njsndjsknd")
// const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=50";
// const select = document.getElementById("pokemonSelect");
// const detailsDiv = document.getElementById("details");

// const cache = {}; // For caching Pokémon details

// // Fetch and populate dropdown
// async function loadPokemonList() {
//   console.log("called");

//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     console.log(data);

//     data.results.forEach((pokemon) => {
//       const option = document.createElement("option");
//       option.value = pokemon.name;
//       option.textContent = pokemon.name;
//       option.setAttribute("data-url", pokemon.url);
//       select.appendChild(option);
//     });
//   } catch (err) {
//     console.error("Error fetching Pokémon list:", err);
//   }
// }

// // On selection, load details (with caching)
// select.addEventListener("change", async (e) => {
//   const selectedOption = select.options[select.selectedIndex];
//   console.log("selectedOption",selectedOption);

//   const name = selectedOption.value;
//   const url = selectedOption.getAttribute("data-url");

//   if (!name) {
//     detailsDiv.innerHTML = "";
//     return;
//   }

//   // If cached, show from memory
//   if (cache[name]) {
//     displayAbilities(name, cache[name]);
//     return;
//   }

//   console.log("cache",cache);

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     const abilities = data.abilities.map((a) => a.ability.name);
//     cache[name] = abilities; // Cache it
//     displayAbilities(name, abilities);
//   } catch (err) {
//     console.error("Error fetching Pokémon details:", err);
//     detailsDiv.innerHTML = `<p style="color:red;">Failed to load data for ${name}</p>`;
//   }
// });

// // Display abilities
// function displayAbilities(name, abilities) {
//   detailsDiv.innerHTML = `
//         <h3>${name}'s Abilities</h3>
//         <ul>
//           ${abilities.map((ab) => `<li>${ab}</li>`).join("")}
//         </ul>
//       `;
// }
// // Init
// loadPokemonList();

// -----------------------------------
// const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=50";
// console.log("apiUrl",apiUrl);

// const selectdom = document.getElementById('select_pokimon');
// const detailsDiv = document.getElementById("details");
// console.log("selectdom",selectdom);

// const cache = {};
// async function getAllPokimons(url){
//     try {
//         const resp = await fetch(url);
//         const respJson = await resp.json();
//         const data = respJson?.results
//         data?.forEach(element => {
//             const newOption = document.createElement("option");
//             newOption.className = 'option_class';
//             newOption.setAttribute('data-url',element.url);
//             newOption.value = element.name;
//             newOption.textContent = element.name;
//             selectdom.appendChild(newOption)
//         });
//     } catch (error) {
//         console.log("error",error);
//     }
// }

// selectdom.addEventListener("change",async(e)=>{      //The selectedIndex property in JavaScript is used to get or set the index of the currently selected option in a <select> element.
//     const selectedOption = selectdom.options[selectdom.selectedIndex];
//     console.log("selectedOption",selectedOption);
//     const name = selectedOption.value;
//     const url = selectedOption.getAttribute('data-url');
//     console.log("name",name);
//     console.log("url",url);
//     console.log("cache",cache);

//     if(cache[name]){
//         showAbilities(name,cache[name])
//         return
//     }

//     try {
//         const resp = await fetch(url);
//         const respJson = await resp.json();
//         const data = respJson?.abilities;
//         const abilities = data?.map((item)=>item.ability.name);
//         cache[name] = abilities
//         showAbilities(name,abilities)
//         console.log(abilities)
//     } catch (error) {
//         console.log("error",error)
//     }

// })

// function showAbilities(name,abilities){
//     detailsDiv.innerHTML = `<h3>${name}</h3>
//         <ul>
//         ${abilities.map((it)=>(`<li>${it}</li>`))}
//         </ul>
//         `
// }

// getAllPokimons(apiUrl)

// --------------------------------------
// --------------------------------------

// ->DEBOUNCING
// function debounce(func, delay) {
//     let timeoutId;
//     return function (...args) {
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => {
//             func.apply(this, args);
//         }, delay);
//     };
// }

// function handleSearch(e) {
//     console.log("Searching for:", e.target.value);
// }

// const debouncedSearch = debounce(handleSearch, 500);
// const searchBox = document.getElementById("searchBox").addEventListener("input", debouncedSearch);

// // --> Throtling

// function throttle(func, delay) {
//   let lastCall = 0;

//   return function (...args) {
//     const now = Date.now();

//     if (now - lastCall >= delay) {
//       lastCall = now;
//       func.apply(this, args);
//     }
//   };
// }

// function handleClick() {
//   console.log("Button clicked at", new Date());
// }

// const throttledClick = throttle(handleClick, 2000); // 2 seconds

// document.getElementById("clickMe").addEventListener("click", throttledClick);

// // -->Memoization

// function memoize(fn) {
//   const cache = {};

//   return function (n) {
//     if (n in cache) {
//       console.log("Fetching from cache:", n);
//       return cache[n];
//     } else {
//       console.log("Calculating result:", n);
//       const result = fn(n);
//       cache[n] = result;
//       return result;
//     }
//   };
// }

// function factorial(x) {
//   if (x === 0) return 1;
//   let sum = 1
//   for (let i = 1; i <= x; i++) {
//     sum = sum*i
//   }
//   return sum;
// }

// const memoizedFactorial = memoize(factorial);

// // Calls
// console.log(memoizedFactorial(5)); // Calculated
// console.log(memoizedFactorial(5)); // Cached
// console.log(memoizedFactorial(6));

// --------------------------------------
// --------------------------------------

// function debounce(func,delay){
//     let timeoutId
//     return function(...args){
//         clearInterval(timeoutId);
//         timeoutId = setTimeout(() => {
//             func.apply(this,args)
//         }, delay);
//     }
// }
// const handleDebounce = (e) =>{
//     console.log("Searched Value : ",e.target.value);
// }
// const debouncedValue = debounce(handleDebounce,1000)
// document.getElementById("input_id").addEventListener("input",debouncedValue)

// function throttling(func,delay){
//     let lastCall = 0;
//     return function(...args){
//         const now = Date.now();
//         if(now - lastCall >= delay){
//             lastCall = now;
//             func.apply(this,args)
//         }
//     }
// }

// const handleClick = (e) =>{
//     console.log("Click me at ",new Date());
// }

// const throttledClick = throttling(handleClick,2000)
// document.getElementById('buttonClick').addEventListener('click',throttledClick)

// ---------------------------------------


// const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=50";

// const selectParentBox = document.getElementById("select_parent_box");
// const detailAbilities = document.getElementById("detail_abilities");

// const cache = {};

// async function getAllPokimonsData(url) {
//   try {
//     const resp = await fetch(url);
//     const respJson = await resp.json();
//     console.log("respJson", respJson?.results);
//     respJson?.results?.forEach((item) => {
//       const createOption = document.createElement("option");
//       createOption.innerHTML = item.name;
//       createOption.className = "options_child";
//       createOption.id = "options_child_id";
//       createOption.setAttribute("data-url", item.url);
//       createOption.value = item.name;
//       selectParentBox.appendChild(createOption);
//     });
//   } catch (error) {
//     console.log("error", error);
//   }
// }
// console.log("cache",cache);

// selectParentBox.addEventListener("change", async () => {
//     const selectedOption = selectParentBox.options[selectParentBox.selectedIndex];
//     console.log("selectedOption",selectedOption);
//   const dataUrl = selectedOption.getAttribute("data-url");
//   const { value } = selectedOption;
//   console.log("value", value);
//   console.log("data-url", dataUrl);
//   if(cache[value]){
//     showAbilities(value,cache[value])
//     return
//   }

//   try {
//       const resp = await fetch(dataUrl);
//       const respJson = await resp.json();
//     //   console.log("respJson",respJson?.abilities);
//       const abilities = respJson?.abilities?.map((item)=>item.ability.name)
//       console.log("abilities",abilities);
//       cache[value]=abilities
//       showAbilities(value,abilities)
//     //   abilities?.forEach((item)=>{
//     //     const createParagraphElement = document.createElement("h2");
//     //     createParagraphElement.innerHTML = item;
//     //     createParagraphElement.className = "abilities_class"
//     //     detailAbilities.appendChild(createParagraphElement)
//     //   })
//   } catch (error) {
//       console.log("error",error);
//   }
// });

// function showAbilities(name,data){
//     detailAbilities.innerHTML = `
//     <h3>${name}</h3>
//     <ul>
//         ${
//             data.map((item)=>`<li>${item}</li>`)
//         }
//     </ul
//     `
// }

// // document.addEventListener("DOMContentLoaded",()=>{
// getAllPokimonsData(API_URL);
// // })



// =========================================

//TEST CASES
// function add(a, b) {
//   return a + b;
// }

// module.exports = { add };


async function getAllPokimonsData() {
  try {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
    const respJson = await resp.json();
    return respJson?.results;
  } catch (error) {
    console.log("error", error);
    return []; // or return null
  }
}

module.exports = { getAllPokimonsData };
