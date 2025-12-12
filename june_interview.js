// const planetUrl = "https://www.swapi.tech/api/planets/";
// console.log(planetUrl);
// let planetList = [];

// const planet_id = document.getElementById("planet_id");
// const unordered_list = document.getElementById("unordered_list");
// console.log(planet_id);

// async function getAllPlanets() {
//   try {
//     const resp = await fetch(planetUrl);
//     const respJson = await resp.json();
//     console.log("respJson", respJson);
//     planetList = respJson?.results?.map((item) => item.name) || [];
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// function debounce(func, delay) {
//   let timeoutId;
//   return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }

// function handleChange(e) {

//   const searchValue = e.target.value.toLowerCase();
//   console.log("searchValue", searchValue);
//   unordered_list.innerHTML = ''
//   if(!searchValue){
//     return
//   }

//   const filteredValues = planetList.filter((item) =>
//     item.toLowerCase().includes(searchValue)
//   );
//   console.log("filteredValues", filteredValues);

//   filteredValues.map((item) => {
//     const createList = document.createElement("li");
//     createList.innerHTML = item;
//     createList.value = item;
//     unordered_list.appendChild(createList);
//   });
// }

// const debouncedSearch = debounce(handleChange, 1000);
// planet_id.addEventListener("input", debouncedSearch);
// document.addEventListener("DOMContentLoaded", () => {
//   getAllPlanets();
// });

// --------------------2nd---------------

// const apiUrl = "https://fakestoreapi.com/carts/2";
// const card_container = document.getElementById("card_container");

// async function getAllCartInfo() {
//   try {
//     const resp = await fetch(apiUrl);
//     const respJson = await resp.json();
//     const products = await Promise.all(
//       respJson?.products?.map((item) =>
//         fetch(`https://fakestoreapi.com/products/${item.productId}`)
//       )
//     );
//     const productsJSON = await Promise.all(
//       products?.map((item) => item.json())
//     );
//     console.log("productsJSON", productsJSON);
//     display(productsJSON);
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// function display(data) {
//     console.log("data",data);

//   data?.map((item) => {
//     const createEmptyDiv = document.createElement("div");
//     createEmptyDiv.innerHTML = `
//         <img src=${item.image} alt=${item.title} height="100" width="100" />
//         <div>
//             <h1>${item.title}</h1>
//             <p>${item.category}<p/>
//             <p>${item.description}</p>
//         </div>
//         `;
//     card_container.appendChild(createEmptyDiv);
//   });

// const productBox = document.createElement("div");

// const title = document.createElement("h2");
// title.textContent = item.title;

// const description = document.createElement("h4");
// description.textContent = item.description;

// const category = document.createElement("h4");
// category.textContent = item.category;

// const price = document.createElement("h4");
// price.textContent = `$${item.price}`;

// const img = document.createElement("img");
// img.src = item.image;
// img.alt = item.title;
// img.height = 200;
// img.width = 200;

// productBox.append(title, description, category, price, img);
// fragment.appendChild(productBox);
// }

// getAllCartInfo();

// ---------------------------3rd---------------

// const url = "https://fakestoreapi.com/products?sort=";
// const product_container = document.getElementById("product_container");
// const select_container = document.getElementById("select_container");

// async function getAllProducts(data) {
//   console.log("called", data);

//   try {
//     console.log(url + data);
//     const resp = await fetch(`${url}${data}`);
//     const respJson = await resp.json();
//     respJson?.sort((a, b) =>
//       data === "asc" ? a.price - b.price : b.price - a.price
//     );
//     console.log("respJson", respJson);

//     display(respJson);
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// function display(data) {
//   console.log("data", data);
//   data?.map((item) => {
//     const empty_div = document.createElement("empty_div");
//     empty_div.className = "empty_div";
//     empty_div.innerHTML = `
//         <h3>${item.title}</h3>
//         <p>${item.description}</p>
//         <p>${item.price}</p>
//         `;
//     product_container.appendChild(empty_div);
//   });
// }

// select_container.addEventListener("change", () => {
//     product_container.innerHTML = ""
//   const selectedOption =
//     select_container.options[select_container.selectedIndex];
//   const { value } = selectedOption;
//   getAllProducts(value);
// });

// getAllProducts("asc");

// ----------------------------------5rth-------------------------

// const getContactForm = document.getElementById("contactForm");

// getContactForm.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const formData = new FormData(getContactForm);
//   console.log("formData", formData);
//     const name = formData.get("name");
//   const age = formData.get("age");
//   console.log(name);
//   console.log(age);
// });

// -----------------------6th----------------------------

// const apiurl = "https://pokeapi.co/api/v2/pokemon?limit=50";

// const selectElelment = document.getElementById("pokimon_select");
// const pokinmonAbilityContainer = document.getElementById(
//   "pokinmon_ability_container"
// );

// const cache = {};

// async function getAllPokimons() {
//   try {
//     const resp = await fetch(apiurl);
//     const respJson = await resp.json();
//     const pokimonsData = respJson?.results;
//     pokimonsData?.map((item) => {
//       const createOptionElelment = document.createElement("option");
//       createOptionElelment.innerHTML = item.name;
//       createOptionElelment.setAttribute("data-url", item.url);
//       createOptionElelment.value = item.name;
//       selectElelment.appendChild(createOptionElelment);
//     });
//     console.log("pokimonsData", pokimonsData);
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// selectElelment.addEventListener("change", async () => {
//   const selectedPokimon = selectElelment.options[selectElelment.selectedIndex];
//   const { value } = selectedPokimon;
//   const dataUrl = selectedPokimon.getAttribute("data-url");
//   if (cache[value]) {
//     displayAbilities(value, cache[value]);
//     return;
//   }
//   try {
//     const resp = await fetch(dataUrl);
//     const respJson = await resp.json();
//     const abilities = respJson?.abilities?.map((item) => item.ability.name);
//     cache[value] = abilities;
//     displayAbilities(value, cache[value]);
//   } catch (error) {
//     console.log("error", error);
//   }
// });

// function displayAbilities(pokimonName, abilities) {
//   pokinmonAbilityContainer.innerHTML = `
//             <h3>${pokimonName}</h3>
//             <ul>
//                 ${abilities.map((item) => `<li>${item}</li>`)}
//             </ul>
//         `;
// }

// getAllPokimons();

// ---------------------------OTHER---------------------------------

// document.getElementById("outer").addEventListener("click", () => {
//   console.log("Outer div clicked");
// });

// document.getElementById("inner").addEventListener("click", (e) => {
//   e.stopPropagation(); // stops bubbling
//   console.log("Inner button clicked");
// });

// const searchinput = document.getElementById("search_input");

// function debounce(func, delay) {
//   let timing;
//   return function (...args) {
//     clearTimeout(timing);
//     timing = setTimeout(() => {
//       func.apply(this,args);
//     }, delay);
//   };
// }

// function handleChange(e){
//     console.log("SEARCHED VALUE ",e.target.value);
// }

// const searchInputText = debounce(handleChange,1200)
// searchinput.addEventListener("input",searchInputText)

// const buttonClick = document.getElementById("button_click");

// function throttle(func,delay){
//     let initialValue = 0
//     return function (...args){
//         const current = Date.now();
//         if(current - initialValue >= delay){
//             initialValue = current
//             func.apply(this,args)
//         }
//     }
// }

// function handleClick(){
//     console.log("you clicked button at ",new Date());
// }

// const handleThrottle = throttle(handleClick,2000)

// buttonClick.addEventListener("click",handleThrottle)

// ===========================================================================================
// ===================================================================================================

// const arr = [1, 3, 2, 5, 4, 6];

// const myMapFn = arr.map((item)=>item*2);
// const myFilterFn = arr.filter((item)=>item%2===0);
// const myReduceFn = arr.reduce((x,y)=>x+y);
// console.log(myMapFn);
// console.log(myFilterFn);
// console.log(myReduceFn);

// Array.prototype.myMapFn = function(calbck){
//   const emptyArr = [];
//   for (let i = 0; i < this.length; i++) {
//     emptyArr.push(calbck(this[i],i,this))
//   }

//   return emptyArr
// }

// Array.prototype.myFilterFn = function(calbck){
//   const emptyArr = [];
//   for (let i = 0; i < this.length; i++) {
//     if(calbck(this[i],i,this)){
//       emptyArr.push(this[i])
//     }
//   }

//   return emptyArr
// }

// Array.prototype.myReduceFn = function(calbck,initialValue){
//   let accumulator;
//   let startIndex = 0;
//   const array = this;

//   if(initialValue!==undefined){
//     accumulator = initialValue
//   }
//   else{
//     while(startIndex<array.length && !(startIndex in array)){
//       startIndex++
//     }
//     if(startIndex>=array.length){
//       throw new Error("Error in reduce fn");
//     }

//     accumulator = array[startIndex];
//     startIndex++
//   }

//   for (let i = startIndex; i < array.length; i++) {
//     accumulator = calbck(accumulator,array[i],i,array);
//   }

//   return accumulator
// }

// const myMapFn = arr.myMapFn((item)=>item+'abc');
// const myFilterFn = arr.filter((item)=>item%2===0);
// const myReduceFn = arr.myReduceFn((x,y)=>x+y,4);
// console.log(myMapFn);
// console.log(myFilterFn);
// console.log(myReduceFn);

// function personInfo(age) {
//   console.log(`Hi my name is ${this.name}.My age is ${age}`);
// }
// const person = { name: "Ritik chauhan" };

// Function.prototype.myCallFn = function(context,...args){
//   context = context || globalThis;
//   const fnSymbol = Symbol();
//   context[fnSymbol] = this;
//   const result = context[fnSymbol](...args);
//   delete context[fnSymbol]
//   return result
// }

// Function.prototype.myApplyFn = function(context,args){
//   context = context || globalThis;
//   const fnSymbol = Symbol();
//   context[fnSymbol] = this;
//   const result = args ? context[fnSymbol](...args) : context[fnSymbol]();
//   delete context[fnSymbol]
//   return result
// }

// Function.prototype.myBindFn = function(context,...args){
//   const fn = this;
//   return function(...childArgs){
//     return fn.apply(context,[...args,...childArgs])
//   }
// }

// personInfo.myCallFn(person,25);
// personInfo.myApplyFn(person,["25"]);
// const bindFn = personInfo.myBindFn(person,"25");
// bindFn();

// const nestedObj = {
//   name: "John",
//   address: {
//     city: "New York",
//     zip: {
//       code: 10001,
//       plus4: 1234,
//     },
//   },
// };

// function flatObj(obj, parentKey = "", result = {}) {
//   for (const key in obj) {
//     const newKey = parentKey ? `${parentKey}_${key}` : key;
//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       flatObj(obj[key], newKey, result);
//     } else {
//       result[newKey] = obj[key];
//     }
//   }

//   return result;
// }

// console.log(flatObj(nestedObj));


// const name = window.prompt("Please enter name");

// function isPalen(data){
//   const strLen = data.length;
//   for (let i = 0; i < strLen/2; i++) {
//     if(data[i]!==data[strLen - i - 1]){
//       return "Not Palendrome"
//     }
//   }

//   return "Palendrome"
// }

// console.log(isPalen(name));

// function personInfo(age){
//   console.log(`Hi Mr. ${this.name}.You are ${age} years old.`);
// }

// const person = {name:"Ritik Chauhan"}

// personInfo.call(person,25);
// const bindFn = personInfo.bind(person,25);
// personInfo.apply(person,["25"])
// console.log(bindFn());

// Function.prototype.myCalFn = function(context,...args){
//   context = context || globalThis
//   const fnSymbol = Symbol();
//   context[fnSymbol] = this
//   const result = context[fnSymbol](...args);
//   delete context[fnSymbol]
//   return result
// }

// Function.prototype.myApplyFn = function(context,args){
//   context = context || globalThis
//   const fnSymbol = Symbol();
//   context[fnSymbol] = this
//   const result = args ? context[fnSymbol](...args) : context[fnSymbol]();
//   delete context[fnSymbol]
//   return result
// }

// Function.prototype.myBindFn = function(context,...args){
//   const fn = this
//   return function(...childArgs){
//     fn.apply(context,[...args,...childArgs])
//   }
// }

// const bindFn = personInfo.myBindFn(person,"14")
// console.log(bindFn());


// const dummyArr = [2,4,6,3,7,8];
// const mapFn = dummyArr.map((item)=>item*2);
// const filterFn = dummyArr.filter((item)=>item%2===0);
// const reduceFn = dummyArr.reduce((x,y)=>x+y,10)
// console.log(reduceFn);


// Array.prototype.filterFn = function(calbck){
//   const emptyArr = [];
//   for (let i = 0; i < this.length; i++) {
//     if(calbck(this[i],i,this)){
//       emptyArr.push(this[i])
//     }
//   }
//   return emptyArr
// }

// Array.prototype.myReduceFn = function(calbck,initialValue){
//   let startIndex = 0
//   let accumulator;
//   const array = this
//   if(initialValue!==undefined){
//     accumulator = initialValue
//   }
//   else{
//     while(startIndex in array && !(startIndex < array.length)){
//       startIndex++
//     }
//     if(startIndex>=array.length){
//       throw new Error("Throw ERROR");
//     }

//     accumulator = array[startIndex]
//     startIndex++
//   }

//   for (let i = startIndex; i < array.length; i++) {
//     accumulator = calbck(accumulator,array[i],i,array)
//   }

//   return accumulator
// }

// const arr = dummyArr.mapFn((item)=>item*2);
// const arr = dummyArr.filterFn((item)=>item%2===0);
// const arr = dummyArr.myReduceFn((x,y)=>x+y);
// console.log(arr);

// const searchInputField = document.getElementById("search_input");

// function debounce(func,delay){
//   let initialTimeId;
//   return function(...args){
//     clearTimeout(initialTimeId);
//     initialTimeId = setTimeout(() => {
//       func.apply(this,args)
//     }, delay);
//   }
// }

// function handleChange(e){
//   console.log(e.target.value);
// }

// const debouncedText = debounce(handleChange,200)

// searchInputField.addEventListener('input',debouncedText)

// const buttonClick = document.getElementById("btn_click");

// function throttle(func,delay){
//   let initialValue = 0;
//   return function(...args){
//     const currentValue = Date.now();
//     console.log("currentValue",currentValue);
//     console.log("initialValue",initialValue);
    
//     if(currentValue - initialValue >= delay){
//       initialValue = currentValue;
//       func.apply(this,args)
//     }
//   }
// }

// function handleClick(){
//   console.log(`Clicked button on`,new Date().toLocaleTimeString());
// }

// const throttleClick = throttle(handleClick,2000)

// buttonClick.addEventListener('click',throttleClick)


//  const nestedObj = {
//           name: "John",
//           address: {
//               city: "New York",
//               zip: {
//                   code: 10001,
//                   plus4: 1234
//               }
//           }
//       };

// function flatObj(data,parentKey='',result={}){
//   for (const key in data) {
//     const newKey = parentKey ? `${parentKey}_${key}` : key;
//     if(typeof data[key]==="object" && data[key]!==null){
//       flatObj(data[key],newKey,result)
//     }
//     else{
//       result[newKey] = data[key]
//     }
//   }

//   return result
// }

// console.log(flatObj(nestedObj));

// const nestedArray = [1, 2, 3, [7, 8, [9]], 4, [5], 6];

// function flatArr(data){
//   const emptyArr = [];
//   for (const element of data) {
//     if(Array.isArray(element)){
//       emptyArr.push(...flatArr(element))
//     }
//     else{
//       emptyArr.push(element)
//     }
//   }

//   return emptyArr
// }

// console.log(flatArr(nestedArray));


// const inputValue = window.prompt("Please enter a name");
// console.log("inputValue",inputValue);

// const revString = inputValue.split('').reverse().join('');
// console.log(revString);

// console.log(inputValue===revString ? "Palendrome" : "Not Palendrome");

// function isPalen(data){
//   const strLength = data.length;
//   for (let i = 0; i < strLength/2; i++) {
//     if(data[i]!==data[strLength - i - 1]){
//       return "NOT-PALENDROME"
//     }
//     else{
//       return "PALENDROME"
//     }
//   }
// }
// console.log(isPalen(inputValue));


// const arr = [2, 4, 6, 4, 1, 8];
// console.log(arr.sort().reverse());

// function sortArr(data){
//   for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data.length - i - 1; j++) {
//       if(data[j]<data[j+1]){
//         let temp = data[j]
//         data[j] = data[j+1]
//         data[j+1] = temp
//       }
//     }
//   }

//   return data
// }
// console.log(sortArr(arr));

// const recurrArr = [{ Sunday: "true" }, { Monday: "true" }]

// function flatArr(data){
//   const emptyObj = {}
//   data.forEach(element => {
//     console.log(element);
//     Object.keys(element).forEach((item)=>{
//       console.log(item);
//       emptyObj[item] = element[item]
//     })
//   });

//   return emptyObj
// }

// console.log(flatArr(recurrArr));


//    const existingPayload = {
//           name: "ritik",
//           age: "24",
//           techStack: "ReactJS",
//       };

//       const newPayload = {
//           name: "ritik",
//           age: "24",
//           techStack: "ReactJS",
//       };

// function samePayload(obj1,obj2){
//   const obj1Keys = Object.keys(existingPayload);
//   const obj2Keys = Object.keys(newPayload);
//   if(obj1Keys.length!==obj2Keys.length) return "NOT SAME KEYS LENGTH";
//   for (const element of obj1Keys) {
//     if(obj1[element]!==obj2[element]){
//       return "NOT SAME"
//     }
//   }

//   return "SAME PAYLOADS"
// }

// console.log(samePayload(existingPayload,newPayload));


// let obj1 = [
//           {
//               id: 1,
//               name: "jack",
//           },
//           {
//               id: 2,
//               name: "leo",
//           },
//           {
//               id: 3,
//               name: "annie",
//           },
//       ];

//       let obj2 = [
//           {
//               id: 4,
//               name: "neil",
//           },
//           {
//               id: 2,
//               name: "nitin",
//           },
//           {
//               id: 3,
//               name: "mukesh",
//           },
//       ];


// const combinedObj = [...obj1,...obj2];
// const onlyIds = combinedObj.map((item)=>item.id);
// console.log(onlyIds);
// const duplicates = onlyIds.filter((item,index)=>onlyIds.indexOf(item)!==index);
// console.log(duplicates);
// const repeats = combinedObj.filter((item,index)=>duplicates.includes(item.id));
// console.log(repeats);


// const value = window.prompt("Please enter a value");

// function isPrimeNo(data){
//   if(data<=1){
//     return "It's Not a prime no as it's less than 1"
//   }
//   for (let i = 2; i < data; i++) {
//     if(data%i===0){
//       return "IT's not a prime no"
//     }
//   }
//   return "It's a prime no"
// }

// console.log(isPrimeNo(value));


// const value = window.prompt("Please enter a value");

// function factorial(data){
//   let fact = 1
//   for (let i = 1; i <= data; i++) {
//     fact *= i
//   }

//   return fact
// }

// console.log(factorial(value));

// const value = +window.prompt("Please enter a value");
// function fabonacciSeries(data){
//   const series = [0,1];
//   for (let i = 2; i < data; i++) {
//     series.push(series[i-1] + series[i-2])
//   }

//   return series
// }

// console.log(fabonacciSeries(value));


// const searchPlanet = document.getElementById("search_planet"); 
// const planetsUl = document.getElementById("planets_ul");
// const planetUrl = "https://www.swapi.tech/api/planets/"
// let planets = []

// async function getAllThePlanets(){
//   try {
//     const resp = await fetch(planetUrl);
//     const respJson = await resp.json();
//     const results = respJson?.results;
//     if(results?.length){
//       planets = results.map((item)=>item.name.toLowerCase());
//     }
    
//   } catch (error) {
//     console.log("error",error);
//   }
// }

// function debounce(func,delay){
//   let initialTimeId;
//   return function(...args){
//     clearTimeout(initialTimeId);
//     initialTimeId = setTimeout(() => {
//       func.apply(this,args)
//     }, delay);
//   }
// }

// function showPlanets(data){
//   data.map((item)=>{
//     const createLi = document.createElement("li");
//     createLi.textContent = item;
//     createLi.value = item
//     createLi.className = 'list_style'
//     planetsUl.appendChild(createLi)
//   })
// }

// function handleChange(e){
//   planetsUl.innerHTML = ""
//   const seachedPlanet = e.target.value.toLowerCase();
//   const filteredPlanets = planets.filter((item)=>item.includes(seachedPlanet));
//   showPlanets(seachedPlanet?.length ? filteredPlanets : [])
// }

// const debouncedText = debounce(handleChange,1200)

// getAllThePlanets()

// searchPlanet.addEventListener('input',debouncedText)


// const apiUrl = "https://fakestoreapi.com/carts/2"
// const productContainer = document.getElementById("product_container");

// async function showProducts(data){
//   data.map((item,index)=>{
//     const createProductBoxDiv = document.createElement("div");
//     const createProductTitle = document.createElement("h1");
//     const createProductCategory = document.createElement("h2");
//     const createProductDescription = document.createElement("h3");
//     const createProductPrice = document.createElement("h4");
//     const createProductImage = document.createElement("img");
//     createProductTitle.textContent = item.title
//     createProductCategory.textContent = item.category
//     createProductDescription.textContent = item.description
//     createProductPrice.textContent = item.price
//     createProductImage.src = item.image;
//     createProductImage.alt = item.title;
//     createProductImage.height = "200";
//     createProductImage.width = "200";
//     createProductBoxDiv.append(createProductTitle,createProductCategory,createProductDescription,createProductPrice,createProductImage);
//     productContainer.appendChild(createProductBoxDiv)
//     })
// }

// async function getAllTheProducts(data){
//   try {
//     const resp = await Promise.all(data.map((item)=>fetch(`https://fakestoreapi.com/products/${item}`)));
//     const respJson = await Promise.all(resp.map((item)=>item.json()));
//     console.log(respJson);
//     if(respJson?.length){
//       showProducts(respJson)
//     }
//   } catch (error) {
//     console.log("error");
//   }
// }

// async function getCartProducts(){
//   try {
//     const resp = await fetch(apiUrl);
//     const respJson = await resp.json();
//     const products = respJson?.products;
//     if(products?.length){
//       const productIds = products.map((item)=>item.productId);
//       getAllTheProducts(productIds)
//     }
//     console.log(respJson);
    
//   } catch (error) {
//     console.log("error",error);
//   }
// }

// getCartProducts()


// const url = "https://fakestoreapi.com/products?sort="
// const productContainer = document.getElementById("product_container");
// const selectOption = document.getElementById("select_option");
// let products = []

// function showAllProducts(data){
//   console.log(data);
  
//   data.map((item)=>{
//     const createDiv = document.createElement("div");
//     createDiv.innerHTML =  `
//       <h1>${item.title}</h1>
//       <h3>${item.price}</h3>
//       <img src=${item.image} alt=${item.title} height="200" width="200" />
//     `
//     productContainer.appendChild(createDiv)
//   })
// }

// async function fetchAllProducts(data) {
//   productContainer.innerHTML = ""
//   try {
//     const resp = await fetch(`${url}${data}`);
//     const respJson = await resp.json();
//     console.log(respJson);
//     if(respJson?.length){
//       // products=respJson
//       respJson.sort((x,y)=>x.price - y.price);
//       showAllProducts(data === "asc" ? respJson.sort((x,y)=>x.price - y.price) : respJson.sort((x,y)=>y.price - x.price))
//     }
//   } catch (error) {
//     console.log("error",error);
//   }
// }

// selectOption.addEventListener('change',()=>{
//   const selectedOption = selectOption.options[selectOption.selectedIndex];
//   const {value} = selectedOption
//   fetchAllProducts(value)
// });

// fetchAllProducts("asc")

// const submitForm = document.getElementById("submit_form");

// submitForm.addEventListener("submit",async(e)=>{
//   e.preventDefault();
//   const formData = new FormData(submitForm);
//   const name = formData.get("name");
//   console.log("name",name);
// })

// const selectPokimon = document.getElementById("select_pokimon");
// const pokimonAbilities = document.getElementById("pokimon_abilities");
// const apiurl = "https://pokeapi.co/api/v2/pokemon?limit=50";
// const cache = {}

// function showPokimons(data){
//   data.map((item)=>{
//     const createLi = document.createElement("option");
//     createLi.textContent = item.name;
//     createLi.value = item.name
//     createLi.setAttribute('data-url',item.url);
//     selectPokimon.appendChild(createLi)
//   })
// }

// async function getAllPokimons(){
//   try {
//     const resp = await fetch(apiurl);
//     const respJson = await resp.json();
//     const results = respJson?.results
//     if(results?.length){
//       showPokimons(results)
//     }
//   } catch (error) {
//     console.log("error",error);
//   }
// }

// async function showPokimonAbilities(data){
//   data.map((item)=>{
//     const createLi = document.createElement("li");
//     createLi.textContent = item
//     pokimonAbilities.appendChild(createLi)
//   })
// }
// console.log("cache",cache);

// async function fetchPokimon(pokimon,data) {
//   try {
//     if(cache[pokimon]){
//       showPokimonAbilities(cache[pokimon])
//       return
//     }
//     const resp = await fetch(data)
//     const respJson = await resp.json();
//     const abilities = respJson?.abilities
//     if(abilities?.length){
//       const ability = abilities?.map((item)=>item.ability.name);
//       cache[pokimon] = ability
//       showPokimonAbilities(ability)
//     }
//   } catch (error) {
//     console.log("error",error);
//   }
// }

// selectPokimon.addEventListener("change",()=>{
//   pokimonAbilities.innerHTML = ""
//   const selectedOption =  selectPokimon.options[selectPokimon.selectedIndex];
//   const {value} = selectedOption
//   const dataUrl = selectedOption.getAttribute('data-url')
//   console.log("selectedOption",selectedOption);
//   fetchPokimon(value,dataUrl)
// })
// getAllPokimons()

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// const searchInput = document.getElementById("search_input");

// function debounce(func,delay){
//   let initialTimeId
//   return function(...args){
//     clearTimeout(initialTimeId);
//     initialTimeId = setTimeout(() => {
//       func.apply(this,args)
//     }, delay);
//   }
// }

// function handleChange(e){
//   console.log(e.target.value);
// }

// const debouncedText = debounce(handleChange,1200)

// searchInput.addEventListener("input",debouncedText)


// const buttonClk = document.getElementById("button_clk");

// function throttle(func,delay){
//   let initailValue = 0;
//   return function(...args){
//     const currentTime = Date.now()
//     if(currentTime - initailValue > delay){
//       initailValue = currentTime;
//       func.apply(this,args);
//     }
//   }
// }

// function handleClick(){
//   console.log(`Clicked button on `,new Date().toLocaleTimeString());
// }

// const throttleClick = throttle(handleClick,2200)

// buttonClk.addEventListener("click",throttleClick)


// const nestedObj = {
//           name: "John",
//           address: {
//               city: "New York",
//               zip: {
//                   code: 10001,
//                   plus4: 1234
//               }
//           }
//       };

// function flatObj(data,parentKey="",result={}){
//   for (const key in data) {
//     const newKey = parentKey ? `${parentKey}_${key}` : key;
//     if(typeof data[key]==="object" && data[key]!==null){
//       flatObj(data[key],newKey,result)
//     }
//     else{
//       result[newKey] = data[key]
//     }
//   }

//   return result
// }

// console.log(flatObj(nestedObj));


// const nestedArray = [1, 2, 3, [7, 8, [9]], 4, [5], 6];
// console.log(nestedArray.flat(Infinity));


// function flatArr(data){
//   const emptyArr = []
//   for(const key of data){
//     if(Array.isArray(key)){
//       emptyArr.push(...flatArr(key))
//     }
//     else{
//       emptyArr.push(key)
//     }
//   }

//   return emptyArr
// }
// console.log(flatArr(nestedArray));


// const value = window.prompt("Please enter name");
// const revString = value.split('').reverse().join('');
// console.log(revString);
// console.log(value===revString ? "Palendrome" : "Not Palendrome");



// function isPalendrome(data){
//   const strLength = data.length
//   for (let i = 0; i < strLength/2; i++) {
//     if(data[i]!==data[strLength - i - 1]){
//       return "Not Palendrome"
//     }
//     else return 'Palendrome'
//   }
// }

// console.log(isPalendrome(value));

// const arr = [2, 4, 6, 4, 1, 8];

// function sortArr(data){
//   for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data.length - i - 1; j++) {
//       if(data[j]<data[j+1]){
//         let temp = data[j];
//         data[j]=data[j+1]
//         data[j+1] = temp
//       }
//     }
//   }

//   return data
// }

// console.log(arr.sort().reverse());


// const recurrArr = [{ Sunday: "true" }, { Monday: "true" }];

// function refineFunc(data){
//   const emptyObj = {}
//   data.forEach((item)=>{
//     Object.keys(item).forEach((it)=>{
//       emptyObj[it] = item[it]
//     })
//   });

//   return emptyObj
// }

// console.log("refineFunc",refineFunc(recurrArr));

//  const existingPayload = {
//           name: "ritik",
//           age: "24",
//           techStack: "ReactJS",
//       };

//       const newPayload = {
//           name: "ritik",
//           age: "24",
//           techStack: "ReactJS",
//       };

// function samePayload(obj1,obj2){
//   const objOneKeys = Object.keys(obj1);
//   const objTwoKeys = Object.keys(obj2);
//   if(objOneKeys.length !== objTwoKeys.length) return "NOT";
//   for(key of objOneKeys){
//     console.log("called insie");
//     if(obj1[key]!==obj2[key]) return "Not Same"
//   }
//     // console.log("called");
// return "Same Pay"
  
// }

// console.log(samePayload(existingPayload,newPayload));


//       let obj1 = [
//           {
//               id: 1,
//               name: "jack",
//           },
//           {
//               id: 2,
//               name: "leo",
//           },
//           {
//               id: 3,
//               name: "annie",
//           },
//       ];

//       let obj2 = [
//           {
//               id: 4,
//               name: "neil",
//           },
//           {
//               id: 2,
//               name: "nitin",
//           },
//           {
//               id: 3,
//               name: "mukesh",
//           },
//       ];

// const combinedObj = [...obj1,...obj2];
// console.log(combinedObj);
// const onlyIds = combinedObj.map((item)=>item.id);
// console.log(onlyIds);
// const repeatIds = onlyIds.filter((item,index)=>onlyIds.indexOf(item)!==index);
// console.log(repeatIds);
// const output = combinedObj.filter((item)=>repeatIds.includes(item.id));
// console.log(output);



//     const a = [1, 2, 3];
//       const b = [1, 2, 3];

// const resp = a.length === b.length && a.every((item)=>b.includes(item));
// console.log(resp ? "Smae" : "Not");


// const a = +window.prompt("Enter value of a")
//       const b = +window.prompt("Enter value of b")
//       const c = +window.prompt("Enter value of c")

//       function greater(x,y,z){
//         if(x>y && y>z){
//           return "X is greater"
//         }
//         else if(y>z && y>x){
//           return "Y is greater"
//         }
//         else{
//           return "Z is greater"
//         }
//       }

//       console.log(greater(a,b,c));
      

// const number = window.prompt("Please enter a number");
// function isPrime(data){
//   if(data<=1){
//     return "It's not a prime number"
//   }
//   else{
//     for (let i = 2; i < data; i++) {
//       if(data%i===0){
//         return "It's not a prime number"
//       }
//     }
//   }
//   return "It's a PRIME no"
// }

// console.log(isPrime(number));


// const number = window.prompt("Please enter a number");

// function fact(data){
//   let fact = 1
//   for (let i = 1; i <= data; i++) {
//     fact *= i
//   }

//   return fact
// }

// console.log(fact(number));

// const number = window.prompt("Please enter a number");

// function fabonacciSeries(data){
//   const series = [0,1];
//   for (let i = 2; i < data; i++) {
//     series.push(series[i-1]+series[i-2])
//   }

//   return series
// }

// console.log(fabonacciSeries(number));



// const planetUrl = "https://www.swapi.tech/api/planets/";
// const searchInput = document.getElementById("search_input");
// const planetsList = document.getElementById("planets_list");
// let planets = []

// async function getAllPlanets(){
//   try {
//     const resp = await fetch(planetUrl);
//     const respjson = await resp.json();
//     if(respjson?.results?.length){
//       planets = respjson?.results?.map((item)=>item.name.toLowerCase());
//     }
//     console.log("respJson",respjson);
//   } catch (error) {
//     console.log("error",error);
//   }
// }

// getAllPlanets()

// function showPlanets(data){
//   data?.map((item)=>{
//     const createLiElement = document.createElement("li");
//     createLiElement.textContent = item;
//     createLiElement.className = "li_style";
//     planetsList.appendChild(createLiElement)
//   })
// }

// function debounce(func,delay){
//   let initialTimeId
//   return function(...args){
//     clearTimeout(initialTimeId);
//     initialTimeId = setTimeout(() => {
//       func.apply(this,args)
//     }, delay);
//   }
// }

// function handleChange(e){
//   planetsList.innerHTML = ""
//   const searchedvalue = e.target.value.toLowerCase();
//   const filteredPlanets = planets.filter((item)=>item.includes(searchedvalue));
//   console.log("filteredPlanets",filteredPlanets);
//   showPlanets(filteredPlanets)
// }

// const debouncedText = debounce(handleChange,1200)

// searchInput.addEventListener("input",debouncedText)



// const productContainer = document.getElementById("product_container");
// const apiUrl = "https://fakestoreapi.com/carts/2"

// function showAllProducts(data){
//   data?.map((item)=>{
//     const createDiv = document.createElement("div");
//     const createTitleElement = document.createElement("h4");
//     const createDescElement = document.createElement("h5");
//     const createCategoryElement = document.createElement("h6");
//     const createPriceElement = document.createElement("p");
//     const createImgElement = document.createElement("img");
//     createDiv.className = 'product_box';
//     createTitleElement.textContent = item.title;
//     createDescElement.textContent = item.description;
//     createCategoryElement.textContent = item.category;
//     createPriceElement.textContent = item.price
//     createImgElement.src = item.image;
//     createImgElement.alt = item.title;
//     createImgElement.height = 200;
//     createImgElement.width = 200
//     createDiv.append(createTitleElement,createDescElement,createCategoryElement,createPriceElement,createImgElement);
//     productContainer.appendChild(createDiv)
//   })
// }

// async function getAllProducts(data){
//   try {
//     const resp = await Promise.all(data?.map((item)=>fetch(`https://fakestoreapi.com/products/${item}`)));
//     const respJson = await Promise.all(resp.map((item)=>item.json()));
//     showAllProducts(respJson)
//   } catch (error) {
//     console.log("error",error);
//   }
// }

// async function getProductsIds(){
//   try {
//     const resp = await fetch(apiUrl);
//     const respJson = await resp.json();
//     if(respJson?.products){
//       const productIds = respJson?.products?.map((item)=>item.productId);
//       getAllProducts(productIds)
//     }
//     console.log(respJson);
    
//   } catch (error) {
//     console.log("error",error);
//   }
// }

// getProductsIds()


// const url = "https://fakestoreapi.com/products?sort=desc";
// const selectPokimon = document.getElementById("select_pokimon");
// const productContainer = document.getElementById("product_container");


// function showAllProducts(data){
//   data?.map((item)=>{
//     const createDiv = document.createElement("div");
//     const createTitleElement = document.createElement("h4");
//     const createDescElement = document.createElement("h5");
//     const createCategoryElement = document.createElement("h6");
//     const createPriceElement = document.createElement("p");
//     const createImgElement = document.createElement("img");
//     createDiv.className = 'product_box';
//     createTitleElement.textContent = item.title;
//     createDescElement.textContent = item.description;
//     createCategoryElement.textContent = item.category;
//     createPriceElement.textContent = item.price
//     createImgElement.src = item.image;
//     createImgElement.alt = item.title;
//     createImgElement.height = 200;
//     createImgElement.width = 200
//     createDiv.append(createTitleElement,createDescElement,createCategoryElement,createPriceElement,createImgElement);
//     productContainer.appendChild(createDiv)
//   })
// }

// async function getAllProducts(data){
//   try {
//     const resp = await fetch(`${url}${data}`);
//     const respJson = await resp.json();
//     if(respJson?.length){
//       // showAllProducts(respJson)
//       showAllProducts(data==="asc" ? respJson.sort((x,y)=>x.price - y.price) : respJson.sort((x,y)=>y.price - x.price))
//     }
//   } catch (error) {
//     console.log("error",error);
//   }
// }


// selectPokimon.addEventListener("change",()=>{
//   productContainer.innerHTML = ""
//   const selectedOption = selectPokimon.options[selectPokimon.selectedIndex];
//   const {value} = selectedOption
//   getAllProducts(value)
// });

// getAllProducts("asc")





// const nestedObj = {
//       name: "John",
//       address: {
//         city: "New York",
//         zip: {
//           code: 10001,
//           plus4: 1234
//         }
//       }
//     };

// function flatObj(data,parentKey = "",result = {}){
//     for(const key in data){
//         const newKey = parentKey ? `${parentKey}_${key}` : key;
//         if(typeof data[key] === "object" && data[key]!==null){
//             flatObj(data[key],newKey,result)
//         }
//         else{
//             result[newKey] = data[key]
//         }
//     }

//     return result
// };

// console.log(flatObj(nestedObj));


// function pureFunc(x,y){
//     return x+y
// }

// console.log(pureFunc(6,8));

// let result = 10
// function impureFunc(){
//     result += 10
// }

// impureFunc()
// console.log(result);

// function teachers(calback){
//     console.log(":teachers Above");
//     setTimeout(() => {
//         calback()
//     }, 1000);
// }

// function students(){
//     console.log("Students Called");
// }

// teachers(students);


// function greet(data){
//     return `Hello ${data}`
// }

// function highFunc(func){
//     const name = "Ritik Chauhan"
//     return func(name)
// }

// console.log(highFunc(greet));



    // function a(x){
    //   return function b(y){
    //     return function c(z){
    //       return x+y+z
    //     }
    //   }
    // }

    // console.log(a(2)(4)(5));
    

function greet(age){
    console.log(`Hello ${this.name}.You are ${age} years old`);
}

const person = {
    name:"Ritik chauhan"
}

// greet.call(person,"25")
// greet.apply(person,["25"])
// const fn = greet.bind(person,["25"]);
// console.log(fn());

// Function.prototype.myCallFn = function(context,...args){
//     context = context || globalThis;
//     const fnSymbol = Symbol();
//     context[fnSymbol] = this
//     const result = context[fnSymbol](...args);
//     delete context[fnSymbol]
//     return result
// }

// Function.prototype.myApplyFn = function(context,args){
//     context = context || globalThis;
//     const fnSymbol = Symbol();
//     context[fnSymbol] = this;
//     const result = args ? context[fnSymbol](...args) : context[fnSymbol]();
//     delete context[fnSymbol];
//     return result
// }

// Function.prototype.myBindFn = function(context,...args){
//     const fn = this;
//     return function(...childArgs){
//         fn.apply(context,[...args,...childArgs])
//     }
// }

// const bind = greet.myBindFn(person,["25"])
// console.log(bind());



// const arr = [1, 2, 3, 4, 5];

// const mapFn = arr.map((item)=>item*2);
// const filterFn = arr.filter((item)=>item%2===0);
// const reduceFn = arr.reduce((x,y)=>x+y,10)
// console.log(mapFn);
// console.log(filterFn);
// console.log(reduceFn);

// Array.prototype.mapFn = function(calback){
//     const emptyArr = [];
//     for (let i = 0; i < this.length; i++) {
//         emptyArr.push(calback(this[i],i,this))
//     }
//     return emptyArr
// }

// Array.prototype.myFilterFn = function(calbck){
//     const emptyArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if(calbck(this[i],i,this)){
//             emptyArr.push(this[i])
//         }
//     }

//     return emptyArr
// }

// Array.prototype.myReduceFn = function(calbck,initialValue){
//     let accumulator;
//     let startIndex = 0;
//     const array = this;

//     if(initialValue!==undefined){
//         accumulator = initialValue
//     }
//     else{
//         while((startIndex < array.length) && !(startIndex in array)){
//             startIndex++
//         }
//         if(startIndex>=array.length){
//             throw new Error("Error in reduce fn");
//         }

//         accumulator = array[startIndex];
//         startIndex++
//     }

//     for (let i = startIndex; i < array.length; i++) {
//         accumulator = calbck(accumulator,array[i],i,array);
//     }

//     return accumulator
// }

// const mapFn = arr.mapFn((item)=>item*2);
// const filterFn = arr.myFilterFn((item)=>item%2===0);
// const myReduceFn = arr.myReduceFn((x,y)=>x+y,1);
// console.log(myReduceFn);


// const nestedArray = [1, 2, 3, [7, 8, [9]], 4, [5], 6];

// function flatArr(data){
//     const emptyArr = [];
//     for (const element of data) {
//         if(Array.isArray(element)){
//             emptyArr.push(...flatArr(element))
//         }
//         else{
//             emptyArr.push(element)
//         }
//     }
//     return emptyArr
// }

// console.log(flatArr(nestedArray));

// const value = window.prompt("Please enter your name");
// const revValue = value.split('').reverse().join('');
// console.log(value === revValue ? "Palendrome" : "Not Palendome");


// function palen(data){
//     const strLen = data.length;
//     for (let i = 0; i < strLen/2; i++) {
//         if(data[i]!==data[strLen - i - 1]){
//             return "Not Palendrome"
//         }
//     }
//     return "Palendrome"
// }

// console.log(palen(value));



// const arr = [2, 4, 6, 4, 1, 8];
// console.log(arr.sort().reverse());

// function sortArr(data){
//     for (let i = 0; i < data.length; i++) {
//         for (let j = 0; j < data.length - i - 1; j++) {
//             if(data[j] < data[j+1]){
//                 let temp = [];
//                 temp = data[j];
//                 data[j] = data[j+1]
//                 data[j+1] = temp
//             }
//         }
//     }

//     return data
// }
// console.log(sortArr(arr));

// const obj = [{ Sunday: "true" }, { Monday: "true" }];

// function flatObj(data){
//     const emptyObj = {}
//     data.map((item)=>{
//         Object.keys(item).forEach((it,index)=>{
//             emptyObj[it] = item[it]
//         })
//     });

//     console.log("emptyObj",emptyObj);
// }

// console.log(flatObj(obj));


// const existingPayload = {
//           name: "ritik",
//           age: "24",
//           techStack: "ReactJS",
//       };

//       const newPayload = {
//           name: "ritik",
//           age: "24",
//           techStack: "ReactJS",
//       };

// function samePayload(obj1,obj2){
//     const objOneKeys = Object.keys(obj1);
//     const objTwoKeys = Object.keys(obj2);

//     for (const element of objOneKeys) {
//         if(obj1[element]!==obj2[element]){
//             return "Not Same Payload"
//         }
//     }

//     return "Same Payload"
// }

// console.log(samePayload(existingPayload,newPayload));



//  let obj1 = [
//           {
//               id: 1,
//               name: "jack",
//           },
//           {
//               id: 2,
//               name: "leo",
//           },
//           {
//               id: 3,
//               name: "annie",
//           },
//       ];

//       let obj2 = [
//           {
//               id: 4,
//               name: "neil",
//           },
//           {
//               id: 2,
//               name: "nitin",
//           },
//           {
//               id: 3,
//               name: "mukesh",
//           },
//       ];

// const combinedObj = [...obj1,...obj2];

// const onlyIds = combinedObj.map((item)=>item.id);
// const repeats = onlyIds.filter((item,index)=>onlyIds.indexOf(item)!==index);
// const repeatObjs = combinedObj.filter((item)=>repeats.includes(item.id));
// console.log(repeatObjs);
// console.log("repeatObjs",repeatObjs);


// const a = [1, 2, 3];
// const b = [1, 2, 3];

// function sameArrlements(x,y){
//     if(x.length!==y.length){
//         return false
//     }
//     else{
//         return a.every((item,index)=>b.includes(item))
//     }
// }

// console.log(sameArrlements(a,b) ? "Same Array Elements" : "Not Same array elements");


// const a = +window.prompt("Please enter value of A");
// const b = +window.prompt("Please enter value of B");
// const c = +window.prompt("Please enter value of C");

// function greaterFunc(x,y,z){
//     if(x>y && y>z){
//         return `${x} is greater`
//     }
//     else if(y>z && y>x){
//         return `${y} is greater`
//     }
//     else return `${z} is greater`
// }
// console.log(`A - ${a},B - ${b},C - ${c}`);
// console.log(greaterFunc(a,b,c));


// const a = +window.prompt("Please enter value of A");

// function isPrimeNo(data){
//     if(data<=1){
//         return "It's not a prime no"
//     }
//         for (let i = 2; i < data; i++) {
//             if(data%i===0){
//                 return "It's not a prime no"
//             }
//         }
//     return "It's a PRIME no."
// }

// console.log(isPrimeNo(a));


// const a = +window.prompt("Please enter value of A");

// function factorial(data){
//     let fact = 1
//     if(data<1){
//         return `Factoral of ${data} is not possible.`
//     }
//     for (let i = 1; i <= data; i++) {
//         fact *= i
//     }
//     return fact
// }

// console.log(factorial(a));

// const a = +window.prompt("Please enter value of A");

// function fabonacciSeries(data){
//     const series = [0,1];
//     for (let i = 2; i < data; i++) {
//         series.push(series[i-1]+series[i-2])
//     }
//     return series
// }
// console.log(fabonacciSeries(a));

// ============
// const inputClick = document.getElementById("input_click");

// function debounce(func,delay){
//     let initialTimeId;
//     return function(...args){
//         clearTimeout(initialTimeId);
//         initialTimeId = setTimeout(() => {
//             func.apply(this,args)
//         }, delay);
//     }
// }

// function handleInputChange(e){
//     const searchedValue = e.target.value;
//     console.log(searchedValue);
// }

// const debouncedText = debounce(handleInputChange,1200);
// inputClick.addEventListener("input",debouncedText)


// const buttonClick = document.getElementById("button_click");

// function throttle(func,delay){
//     let initailValue = 0;
//     return function(...args){
//         const currentTimeId = Date.now();
//         if(currentTimeId - initailValue > delay){
//             initailValue = currentTimeId;
//             func.apply(this,args)
//         }
//     }
// }

// function handleClick(){
//     console.log(`Clicked buitton on`,new Date().toLocaleTimeString());
// }

// const throttleClick = throttle(handleClick,2000)

// buttonClick.addEventListener("click",throttleClick)

// const selectBox = document.getElementById("select_box");
// const pokomonAbility = document.getElementById("pokomon_ability");
// const url = "https://pokeapi.co/api/v2/pokemon?limit=50";
// const cache = {}

// async function showPokimonsList(data) {
//     data?.map((item)=>{
//         const createOption = document.createElement("option");
//         createOption.value = item.name;
//         createOption.textContent = item.name;
//         createOption.setAttribute("data-url",item.url);
//         selectBox.appendChild(createOption)
//     })
// }

// async function getAllPokomons(){
//     try {
//         const resp = await fetch(url);
//         const respjson = await resp.json();
//         if(respjson?.results){
//             const results = respjson.results;
//             showPokimonsList(results)
//         }
//         console.log(respjson);
        
//     } catch (error) {
//         console.log("error",error);
//     }
// }

// getAllPokomons();

// async function showPokimons(data) {
//     data?.map((item)=>{
//         const createElement = document.createElement("li");
//         createElement.className = 'poki_li_box'
//         createElement.textContent = item;
//         pokomonAbility.appendChild(createElement);
//     })
// }

// selectBox.addEventListener("change",async()=>{
//     pokomonAbility.innerHTML = ""
//     const selectedoption = selectBox.options[selectBox.selectedIndex];
//     const dataUrl = selectedoption.getAttribute('data-url');
//     const pokimon = selectedoption.value;
//     if(cache[pokimon]){
//         showPokimons(cache[pokimon]);
//         return
//     }
//     try {
//         const resp = await fetch(dataUrl);
//         const respJson = await resp.json();
//         if(respJson?.abilities){
//             const abilities = respJson?.abilities?.map((item)=>item.ability.name);
//             cache[pokimon] = dataUrl
//             showPokimons(abilities)
//         }
//         console.log("respJson",respJson);
//     } catch (error) {
//         console.log("error",error);
//     }
// })



// const formContainer = document.getElementById("form_container");

// formContainer.addEventListener("submit",async(e)=>{
//     e.preventDefault()
//     const formData = new FormData(formContainer);
//     const name = formData.get('name');
//     const email = formData.get('email');
//     console.log(name,email);
    
// })

// const searchPlanet = document.getElementById("search_planet");
// const planetsUl = document.getElementById("planets_unol");
// const planetUrl = "https://www.swapi.tech/api/planets/";
// let planets = []

// async function getPlanet() {
//     try {
//         const resp = await fetch(planetUrl);
//         const respJson = await resp.json();
//         if(respJson?.results){
//             planets = respJson?.results?.map((item)=>item.name.toLowerCase());
//         }
//         console.log(respJson);
         
//     } catch (error) {
//         console.log("error",error);
//     }
// }


// function debounce(func,delay){
//     let initialTimeId;
//     return function(...args){
//         clearTimeout(initialTimeId);
//         initialTimeId = setTimeout(() => {
//             func.apply(this,args)
//         }, delay);
//     }
// }

// function showValues(data){
//     data.map((item)=>{
//         const createLiElement = document.createElement("li");
//         createLiElement.textContent = item;
//         createLiElement.className = 'li_planet'
//         planetsUl.appendChild(createLiElement);
//     })
// }

// function handleInputChange(e){
//     planetsUl.innerHTML = ''
//     const searchedValue = e.target.value.toLowerCase();
//     const filteredValues = planets?.filter((item)=>item.includes(searchedValue));
//     showValues(searchedValue?.length ? filteredValues : [])
// }

// const debouncedText = debounce(handleInputChange,1200);
// searchPlanet.addEventListener("input",debouncedText)

// getPlanet()

// const productContainerBox = document.getElementById("product_container_box");
// const apiUrl = "https://fakestoreapi.com/carts/2"

// function showAllProducts(data){
//     data?.map((item)=>{
//         const createProductBox = document.createElement("div");
//         createProductBox.className = "product_main_container";
//         const createTitleBox = document.createElement("h4");
//         const createCategoryBox = document.createElement("h5");
//         const createDescBox = document.createElement("h6");
//         const createPriceBox = document.createElement("p");
//         const createImgBox = document.createElement("img");
//         createTitleBox.textContent = item.title;
//         createCategoryBox.textContent = item.category;
//         createDescBox.textContent = item.description;
//         createPriceBox.textContent = item.price;
//         createImgBox.src = item.image;
//         createImgBox.alt = item.title;
//         createImgBox.height = 200
//         createImgBox.width = 200
//         createProductBox.append(createTitleBox,createCategoryBox,createDescBox,createPriceBox,createImgBox);
//         productContainerBox.appendChild(createProductBox)
//     })
// }

// async function getAllProducts(data){
//     try {
//         const resp = await Promise.all(data.map((item)=>fetch(`https://fakestoreapi.com/products/${item}`)));
//         const respJson = await Promise.all(resp.map((item)=>item.json()));
//         if(respJson?.length){
//             showAllProducts(respJson)
//         }
//         console.log(respJson);
        
//     } catch (error) {
//         console.log("error");
//     }
// }

// async function getCartsInfo() {
//     try {
//         const resp = await fetch(apiUrl);
//         const respJson = await resp.json();
//         if(respJson?.products){
//             const products = respJson?.products?.map((item)=>item.productId);
//             getAllProducts(products)
//         }
//         console.log(respJson);
//     } catch (error) {
//         console.log("error",error);
//     }
// }

// getCartsInfo()

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const searchInput = document.getElementById("search_input")
// console.log("searchInput");

// function debounce(func,delay){
//     let initialTimeId
//     return function (...args){
//         clearTimeout(initialTimeId);
//         initialTimeId = setTimeout(() => {
//             func.apply(this,args)
//         }, delay);
//     }
// }

// function handleChange(e){
//     console.log(e.target.value);
// }
// const debouncedText = debounce(handleChange,1500)
// searchInput.addEventListener("input",debouncedText)


// const clickMe = document.getElementById("click_me")
// function throttle(func,delay){
//     let initialValue = 0
//     return function(...args){
//         const currentTimeId = Date.now();
//         if(currentTimeId-initialValue > delay){
//             initialValue = currentTimeId;
//             func.apply(this,args)
//         }
//     }
// }
// function handleClick(){
//     console.log(`Clicked me at`,new Date().toLocaleTimeString());
// }
// const throttleClick = throttle(handleClick,2000)
// clickMe.addEventListener('click',throttleClick)



// const nestedObj = {
//           name: "John",
//           address: {
//               city: "New York",
//               zip: {
//                   code: 10001,
//                   plus4: 1234
//               }
//           }
//       };

//     const flatObj = {
//   name: "John",
//   address_city: "NY",
//   address_pin: 12345,
//   address_location_area: "Central"
// };


//     function unflatten(data) {
//   const result = {};

//   for (const key in data) {
//     const keys = key.split("_"); // split back the path
//     let current = result;
//     console.log("keys",keys);
    
//     keys.forEach((part, index) => {
//         console.log("--index--",index);
        
//       if (index === keys.length - 1) {
//         current[part] = data[key]; // assign value at last key
//       } else {
//         current[part] = current[part] || {}; // create nested object if not exists
//         current = current[part]; // go deeper
//       }

//       console.log("current",current);
      
//     });
//   }

//   return result;
// }


// console.log(unflatten(flatObj));


// const nestedArray = [1, 2, 3, [7, 8, [9]], 4, [5], 6];
// function flatArr(data){
//     const emptyArr = []
//     for(const key of data){
//         if(Array.isArray(key)){
//             emptyArr.push(...flatArr(key));
//         }
//         else{
//             emptyArr.push(key);
//         }
//     }

//     return emptyArr
// }

// console.log(flatArr(nestedArray));


// const nameValue = window.prompt("Please enter a name");
// const revName = nameValue.split('').reverse().join('');

// console.log(nameValue === revName ? "Palendome" : "Not Palendrome");


// function isPalen(data){
//     const strLength = data.length;
//     for (let i = 0; i < strLength/2; i++) {
//         if(data[i]!==data[strLength - i - 1]){
//             return "It's NOT Palendrome"
//         }
//     }
//     return "It's Palendrome"
// }

// console.log(isPalen(nameValue));



// const arr = [2, 4, 6, 4, 1, 8];

// function sortArr(data){
//     for (let i = 0; i < data.length; i++) {
//         for (let j = 0; j < data.length - i - 1; j++) {
//             if(data[j] < data[j+1]){
//                 let temp = data[j]
//                 data[j] = data[j+1]
//                 data[j+1] = temp
//             }
//         }
//     }

//     return data
// }
// console.log(sortArr(arr));



// const recurrArr = [{ Sunday: "true" }, { Monday: "true" }];

// function flatArr(data){
//     const emptyObj = {}
//     data.forEach((element) => {
//         Object.keys(element).forEach((item)=>{
//             emptyObj[item] = element[item]
//         })
//     });

//     return emptyObj
// }

// console.log(flatArr(recurrArr));



// const existingPayload = {
//           name: "ritik",
//           age: "24",
//           techStack: "ReactJS",
//       };

//       const newPayload = {
//           name: "ritik",
//           age: "24",
//           techStack: "ReactJS",
//       };

// // const samePayload = console.log(JSON.stringify(existingPayload)===JSON.stringify(newPayload));

// function samePayload(obj1,obj2){
//     const obj1Keys = Object.keys(obj1)
//     const obj2Keys = Object.keys(obj2)

//     if(obj1Keys.length!==obj2Keys.length){
//         return "NOT SAME PAY"
//     }
//     // else{
//         for (const element of obj1Keys) {
//             if(obj1[element] !== obj2[element]){
//                 return "Not Same"
//             }
//         }

//         return "Same Payload"
//     // }
// }

// console.log(samePayload(existingPayload,newPayload));




//       let obj1 = [
//           {
//               id: 1,
//               name: "jack",
//           },
//           {
//               id: 2,
//               name: "leo",
//           },
//           {
//               id: 3,
//               name: "annie",
//           },
//       ];

//       let obj2 = [
//           {
//               id: 4,
//               name: "neil",
//           },
//           {
//               id: 2,
//               name: "nitin",
//           },
//           {
//               id: 3,
//               name: "mukesh",
//           },
//       ];

// const combinedObj = [...obj1,...obj2];
// const onlyIds = combinedObj.map((item)=>item.id);
// const repeats = onlyIds.filter((item,index)=>onlyIds.indexOf(item)!==index);
// const duplic = combinedObj.filter((item,index)=>repeats.includes(item.id))
// console.log(combinedObj);
// console.log(duplic);


// const num = +window.prompt("Please enter a number");

// function isPrime(data){
//     if(num<=1){
//         return "It's not a Prime Number"
//     }
//     else{
//         for (let i = 2; i < data; i++) {
//             if(data%i===0){
//                 return "It's not a prime number"
//             }
//         }
//         return "It's a prime number"
//     }
// }

// console.log(isPrime(num));


// let a = 10;
// let b = 15;

//     let temp = a;
//     a = b
//     b = temp

// console.log(a,b);


// const name = +window.prompt("Please enter your name")
// function factorial(data){
//     let fact = 1
//     for (let i = 1; i <= data; i++) {
//         fact *= i
//     }

//     return fact
// }

// console.log(factorial(name));


// const name = +window.prompt("Please enter your name")

// function fabonacciSeries(data){
//     console.log(typeof data);
    
//     const series = [0,1];
//     for (let i = 2; i <= data; i++) {
//         series.push(series[i-1]+series[i-2])
//     }

//     return series
// }

// console.log(fabonacciSeries(name));

// const planet_ul = document.getElementById("planet_ul");
// const search_planet = document.getElementById("search_planet");
// const planetUrl = "https://www.swapi.tech/api/planets/";
// let planets = []

// function showPlanets(data){
//     data.map((item)=>{
//         const createLiElement = document.createElement("li");
//         createLiElement.textContent = item
//         createLiElement.className = "planetLiClass"
//         planet_ul.appendChild(createLiElement)
//     })
// }

// async function getAllPlanets() {
//     try {
//         const resp = await fetch(planetUrl);
//         const respJson = await resp.json();
//         const results = respJson?.results
//         console.log("results",results);
//         if(results?.length){
//             const onlyPlanets = results?.map((item)=>item.name.toLowerCase())
//             planets = onlyPlanets
//         }
//     } catch (error) {
//         console.log("error",error);
//     }
// }

// getAllPlanets()


// function debounce(func,delay){
//     let initialTimeId
//     return function (...args){
//         clearTimeout(initialTimeId);
//         initialTimeId = setTimeout(() => {
//             func.apply(this,args)
//         }, delay);
//     }
// }

// function handleChange(e){
//     planet_ul.innerHTML = ""
//     const searchedValue = e.target.value.toLowerCase();
//     const filteredPlanets = planets.filter((item,index)=>item.includes(searchedValue))
//     if(filteredPlanets?.length){
//         showPlanets(searchedValue?.length ? filteredPlanets : [])
//     }
// }
// const debouncedText = debounce(handleChange,1500)

// search_planet.addEventListener('input',debouncedText)




// const apiUrl = "https://fakestoreapi.com/carts/2"
// const eaachProductUrl = "https://fakestoreapi.com/products/"
// const showProducts = document.getElementById("show_products");

// function showAllProducts(data){
//     //method 1
//     showProducts.innerHTML = data.map((item=>{
//          return `<div>
//             <h1>${item.title}</h1>
//             <h2>${item.price}</h2>
//             <h3>${item.category}</h3>
//             <h4>${item.description}</h4>
//             <img src=${item.image} alt=${item.title} height=${200} width=${200} />
//         </div>`
//     })).join("")

//     //method 2
    // data.map((item)=>{
    //     const createEmptydiv = document.createElement("div");
    //     const titleElement = document.createElement("h3");
    //     const priceElement = document.createElement("h4");
    //     const categoryElement = document.createElement("h5");
    //     const descElement = document.createElement("h6");
    //     const imgElement = document.createElement("img");
    //     titleElement.textContent = item.title
    //     priceElement.textContent = item.price
    //     categoryElement.textContent = item.category
    //     descElement.textContent = item.description
    //     imgElement.src = item.image
    //     imgElement.alt = item.title
    //     imgElement.height = 200
    //     imgElement.width = 200
    //     createEmptydiv.append(titleElement,priceElement,categoryElement,descElement,imgElement)
    //     showProducts.appendChild(createEmptydiv)
    // })
// }

// async function fetchAllProducts(data){
//     try {
//         const resp = await Promise.all(data.map((item)=>fetch(`${eaachProductUrl}/${item}`)));
//         const respjson = await Promise.all(resp.map((item)=>item.json()));
//         console.log("respjson",respjson);
//         if(respjson?.length){
//             showAllProducts(respjson)
//         }
//     } catch (error) {
//         console.log("error",error);
//     }
// }

// async function getAllProducts() {
//     try {
//         const resp = await fetch(apiUrl);
//         const respJson = await resp.json();
//         if(respJson?.id){
//             const products = respJson?.products?.map((item)=>item.productId)
//             fetchAllProducts(products)
//         }
//         console.log(respJson);
        
//     } catch (error) {
//         console.log("error",error);
//     }
// }

// getAllProducts()


// const selectId = document.getElementById("select_id");
// const parentContainer = document.getElementById("parent_container")
// const url = "https://fakestoreapi.com/products?sort=";

// function showProducts(data){
//     data.map((item)=>{
//         const createEmptydiv = document.createElement("div");
//         const titleElement = document.createElement("h3");
//         const priceElement = document.createElement("h4");
//         const categoryElement = document.createElement("h5");
//         const descElement = document.createElement("h6");
//         const imgElement = document.createElement("img");
//         titleElement.textContent = item.title
//         priceElement.textContent = item.price
//         categoryElement.textContent = item.category
//         descElement.textContent = item.description
//         imgElement.src = item.image
//         imgElement.alt = item.title
//         imgElement.height = 200
//         imgElement.width = 200
//         createEmptydiv.append(titleElement,priceElement,categoryElement,descElement,imgElement)
//         parentContainer.appendChild(createEmptydiv)
//     })
// }

// async function getAllProducts(data) {
//     try {
//         const resp = await fetch(`${url}${data}`);
//         const respJson = await resp.json();
//         if(respJson?.length){
//             if(data==='asc'){
//                 const ascSort = respJson?.sort((x,y)=>x.price - y.price);
//                 console.log("ascSort",ascSort);
//                 showProducts(respJson)
//             }
//             else{
//                 const descSort = respJson?.sort((x,y)=>y.price - x.price);
//                 showProducts(respJson)
//             }
//         }
//     } catch (error) {
//         console.log("error",error);
//     }
// }

// selectId.addEventListener("change",()=>{
//     parentContainer.innerHTML = ''
//     const selectedOption = selectId.options[selectId.selectedIndex];
//     const {value} = selectedOption
//     getAllProducts(value)
// })

// getAllProducts("asc")


// const formInput = document.getElementById("form_input");

// formInput.addEventListener("submit",async(e)=>{
//     e.preventDefault()
//     const formElement = new FormData(formInput);
//     const name = formElement.get('name')
//     const age = formElement.get('age')
//     console.log(name,age);
// })

// const selectPokimon = document.getElementById("select_pokimon");
// const pokimonDetails = document.getElementById("pokimon_details")
// const apiurl = "https://pokeapi.co/api/v2/pokemon?limit=50";
// const cache = {}

// function showOptions(data){
//     console.log("called");
    
//     data.map((item)=>{
//         const createOption = document.createElement("option");
//         createOption.value = item.name
//         createOption.textContent = item.name
//         createOption.setAttribute('data-url',item.url);
//         selectPokimon.appendChild(createOption)
//     })
// }

// async function getAllPokimons() {
//     try {
//         const resp = await fetch(apiurl);
//         const respJson = await resp.json();
//         if(respJson?.results?.length){
//             const results = respJson.results;
//             showOptions(results)
//         }
//         console.log(respJson);
        
//     } catch (error) {
//         console.log("error",error);
//     }
// }

// function showAbilities(data){
//     data?.map((item)=>{
//         const createLiElement = document.createElement("li");
//         createLiElement.textContent = item
//         pokimonDetails.appendChild(createLiElement)
//     })
// }

// async function fetchSelectedPokimon(pokimon,pokiurl) {
//     console.log("cache",cache);
    
//     if(cache[pokimon]){
//         showAbilities(cache[pokimon]);
//         return
//     }
//     try {
//         const resp = await fetch(pokiurl);
//         const respJson = await resp.json();
//         if(respJson?.abilities){
//             const abilities = respJson.abilities.map((item)=>item?.ability?.name);
//             console.log("abilities",abilities);
            
//             cache[pokimon] = abilities
//             if(abilities.length){
//                 showAbilities(abilities)
//             }
//         }
//         console.log(respJson);
        
//     } catch (error) {
//         console.log("error",error);
//     }
// }

// selectPokimon.addEventListener("change",async()=>{
//     pokimonDetails.innerHTML = ""
//     const selectedPokimon = selectPokimon.options[selectPokimon.selectedIndex];
//     const {value} = selectedPokimon;
//     const url = selectedPokimon.getAttribute('data-url')
//     fetchSelectedPokimon(value,url)
// })

// getAllPokimons()



