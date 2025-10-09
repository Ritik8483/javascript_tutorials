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

const url = "https://fakestoreapi.com/products?sort=";
const product_container = document.getElementById("product_container");
const select_container = document.getElementById("select_container");

async function getAllProducts(data) {
  console.log("called", data);

  try {
    console.log(url + data);
    const resp = await fetch(`${url}${data}`);
    const respJson = await resp.json();
    respJson?.sort((a, b) =>
      data === "asc" ? a.price - b.price : b.price - a.price
    );
    console.log("respJson", respJson);

    display(respJson);
  } catch (error) {
    console.log("error", error);
  }
}

function display(data) {
  console.log("data", data);
  data?.map((item) => {
    const empty_div = document.createElement("empty_div");
    empty_div.className = "empty_div";
    empty_div.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p>${item.price}</p>
        `;
    product_container.appendChild(empty_div);
  });
}

select_container.addEventListener("change", () => {
    product_container.innerHTML = ""
  const selectedOption =
    select_container.options[select_container.selectedIndex];
  const { value } = selectedOption;
  getAllProducts(value);
});

getAllProducts("asc");

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

// const getInputField = document.getElementById("search_input");
// const searched_planets_container = document.getElementById(
//   "searched_planets_container"
// );

// let planets = [];

// async function getAllPlanets() {
//   try {
//     const resp = await fetch("https://www.swapi.tech/api/planets/");
//     const respJson = await resp.json();
//     planets = respJson?.results?.map((item) => item.name.toLowerCase());
//     console.log("respJson", respJson);
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// function debounce(func, delay) {
//   let initialTime;
//   return function (...args) {
//     clearTimeout(initialTime);
//     initialTime = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }

// function handleChange(e) {
//     searched_planets_container.innerHTML = ""
//   const value = e.target.value;
//   const searchedValue = value.toLowerCase();
//   const filteredValues = planets?.filter((item) =>
//     item.includes(searchedValue)
//   );
//   if(!searchedValue.length){
//     return
//   }
//   console.log("planets = []",filteredValues);

//   display(filteredValues);
// }

// const debouncedFunction = debounce(handleChange, 500);

// function display(data) {
//     console.log("data",data);
//     data.map((item)=>{
//         const createElement = document.createElement('li');
//         createElement.innerHTML = item;
//         createElement.id = 'li_id';
//         searched_planets_container.appendChild(createElement)
//     })
// //   searched_planets_container.innerHTML = `
// //     <ul id='ul_list' >
// //         ${data?.map((item) => `<li id='li_id' >${item}</li>`).join('')}
// //     </ul>
// //     `;
// }

// getAllPlanets();

// getInputField.addEventListener("input", debouncedFunction);

// const url = "https://fakestoreapi.com/carts/2"
// const conatinerBox = document.getElementById("conatiner_box");

// let allProducts = []
// async function getAllcarts(){
//     try {
//         const resp = await fetch(url);
//         const respJson = await resp.json();
//         const products = respJson?.products?.map((item)=>item.productId)
//         fetAllProductDetails(products)
//     } catch (error) {
//         console.log("error",error);
//     }
// }

// async function fetAllProductDetails(data){
//     try {
//         const resp = await Promise.all(data.map((item)=>fetch(`https://fakestoreapi.com/products/${item}`)))
//         const respJson = await Promise.all(resp.map((item)=>item.json()))
//         console.log(respJson);
//         display(respJson)
//     } catch (error) {
//         console.log("error",error)
//     }
// }

// function display(data){
//     data.map((item)=>{
//         const createElement = document.createElement('div');
//         createElement.className = 'createElement'
//         createElement.innerHTML = `
//         <img src=${item.image} alt=${item.title} height='100' width='100' />
//         <h1>${item.title}</h1>
//         <h2>${item.category}</h2>
//         <h3>${item.price}</h3>
//         `
//         conatinerBox.appendChild(createElement)
//     })
// }

// getAllcarts()

// const url = "https://fakestoreapi.com/products?sort=";
// const conatinerBox = document.getElementById("conatiner_box");
// const box = document.getElementById("box");

// async function getAllcarts(data) {
//   try {
//     const resp = await fetch(url + data);
//     const respJson = await resp.json();
//     respJson.sort((a, b) =>
//       data === "asc" ? a.price - b.price : b.price - a.price
//     );
//     display(respJson)
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// conatinerBox.addEventListener("change", () => {
//     box.innerHTML = ''
//   const selectedvalue = conatinerBox.options[conatinerBox.selectedIndex];
//   const { value } = selectedvalue;
//   if (value) {
//     getAllcarts(value);
//   }
//   console.log("selectedvalue", selectedvalue);
// });

// function display(data){
//     console.log("data",data);

//     data.map((item)=>{
//         const createElement = document.createElement('div');
//         createElement.className = 'createElement'
//         createElement.innerHTML = `
//         <img src=${item.image} alt=${item.title} height='100' width='100' />
//         <h1>${item.title}</h1>
//         <h2>${item.category}</h2>
//         <h3>${item.price}</h3>
//         `
//         box.appendChild(createElement)
//     })
// }

// getAllcarts("asc");

// ----------------------------------3rd july interview Prep---------------------

// const apiurl = "https://pokeapi.co/api/v2/pokemon?limit=50";
// const selectPokimonContainer = document.getElementById("select_pokimon");
// const pokimonAbilitiesContainer = document.getElementById("pokimon_abilities");
// const cache = {}

// function displayPokimonsInDD(data) {
//   data.map((item) => {
//     const createOption = document.createElement("option");
//     createOption.textContent = item.name;
//     createOption.value = item.name;
//     createOption.setAttribute("data-url", item.url);
//     selectPokimonContainer.appendChild(createOption);
//   });
// }

// async function getAllThePokimons() {
//   try {
//     const resp = await fetch(apiurl);
//     const respJson = await resp.json();
//     const pokimons = respJson?.results;
//     if (pokimons?.length) {
//       displayPokimonsInDD(pokimons);
//     }
//   } catch (error) {
//     console.log("Error", error);
//   }
// }

// selectPokimonContainer.addEventListener("change", async () => {
//   const selectedPokimon =
//     selectPokimonContainer.options[selectPokimonContainer.selectedIndex];
//   const pokimonName = selectedPokimon.value;
//   const pokimonUrl = selectedPokimon.getAttribute("data-url");
//   if (!pokimonName) return;
//   if(cache[pokimonName]){
//     displayPokimonAbilities(cache[pokimonName],pokimonName)
//     return
//   }
//   try {
//     const resp = await fetch(pokimonUrl);
//     const respJson = await resp.json();
//     const abilities = respJson?.abilities?.map((item) => item.ability.name);
//     if (abilities?.length && pokimonName) {
//       displayPokimonAbilities(abilities, pokimonName);
//       cache[pokimonName] = abilities
//     }
//   } catch (error) {
//     console.log("error", error);
//   }
//   console.log(pokimonName, pokimonUrl);
// });

// function displayPokimonAbilities(data, name) {
//   pokimonAbilitiesContainer.innerHTML = `
//     <ul>${name}</ul>
//     ${data.map((item) => `<li>${item}</li>`).join('')}
//   `;
// }

// document.addEventListener("DOMContentLoaded", getAllThePokimons());

// ------------------------------------------------

// const planetUrl = "https://www.swapi.tech/api/planets/";

// const planetInputField = document.getElementById('planet_input');
// const planetDetail = document.getElementById('planet_detail');
// let planets = []

// async function getAllPlanets(){
//   try {
//     const resp = await fetch(planetUrl);
//     const respJson = await resp.json();
//     planets = respJson?.results?.map((item)=>item.name.toLowerCase());
//   } catch (error) {
//     console.log(error);
//   }
// }

// function debounce(func,delay){
//   let initialtimeId
//   return function(...args){
//     clearTimeout(initialtimeId);
//     initialtimeId = setTimeout(() => {
//       func.apply(this,args)
//     }, delay);
//   }
// }

// function handleChange(e){
//   const searchedValue = e.target.value;
//   const planetName = searchedValue.toLowerCase();
//   const filteredValue = planets.filter((item)=>item.includes(planetName))
//   displayPlanets(planetName?.length ? filteredValue : [])
// }

// function displayPlanets(data){
//   planetDetail.innerHTML = `
//     <ul id='ul_class' >
//     ${
//       data.map((item)=>`<li id='li_class' >${item}</li>`).join('')
//     }
//     </ul>
//   `
// }

// const debouncedValue = debounce(handleChange,1000)

// planetInputField.addEventListener('input',debouncedValue)

// document.addEventListener("DOMContentLoaded",getAllPlanets())

// const apiUrl = "https://fakestoreapi.com/carts/2";

// const productDetail = document.getElementById("product_detail");
// let productIds = [];

// async function getAllCarts() {
//   try {
//     const resp = await fetch(apiUrl);
//     const respJson = await resp.json();
//     const productIds = respJson?.products?.map((it) => it.productId);
//     if (productIds?.length) {
//       getAllProductDeatils(productIds);
//     }
//     console.log(productIds);
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function getAllProductDeatils(productIds) {
//   try {
//     const resp = await Promise.all(
//       productIds.map((item) =>
//         fetch(`https://fakestoreapi.com/products/${item}`)
//       )
//     );
//     const respJson = await Promise.all(resp.map((item) => item.json()));
//     console.log();

//     if (respJson?.length) {
//       displayProducts(respJson);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// function displayProducts(data) {
//   productDetail.innerHTML = `
//   <div>
//     ${data
//       ?.map((item) => {
//         return `
//       <div class="main_detail_box" >
//       <h2>${item.title}</h2>
//       <img src=${item.image} alt=${item.title} height="100" width="100" />
//       <h4>${item.category}</h4>
//       <p>${item.description}</p>
//     </div>`;
//       })
//       .join("")}
//       </div>
//   `;
// }

// document.addEventListener("DOMContentLoaded", getAllCarts());

// const url = "https://fakestoreapi.com/products?sort=asc";

// const productDetail = document.getElementById("product_detail");
// const selectOrder = document.getElementById("select_order");
// let productIds = [];

// async function getAllProducts(data) {
//   try {
//     const resp = await fetch(`${url}${data}`);
//     const respJson = await resp.json();
//     console.log("respJson",respJson);
//     if (respJson?.length) {
//       respJson.sort((a,b)=>data==="asc" ? a.price-b.price : b.price - a.price)
//       displayProducts(respJson)
//     }
//     console.log(productIds);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function displayProducts(data){
//   productDetail.innerHTML = `
//   ${
//     data?.map((item)=>{
//       return `
//         <div class='main_detail_box >
//           <img src=${item.image} alt=${item.title} height='100' width='100' />
//           <h3>${item.title}</h3>
//           <h4>${item.price}</h4>
//           <h5>${item.category}</h5>
//         </div>
//       `
//     }).join('')
//   }
//   `
// }

// selectOrder.addEventListener("change",()=>{
//   const selectedOption = selectOrder.options[selectOrder.selectedIndex];
//   const selectedvalue = selectedOption.value;
//   if(selectedvalue){
//     getAllProducts(selectedvalue)
//   }
//   console.log("selectedOption",selectedOption);
// })

// document.addEventListener("DOMContentLoaded", getAllProducts("asc"));

// const button = document.getElementById("button_click");

// function throttle(func, delay) {
//   let lastCall = 0;
//   return function (...args) {
//     const current = Date.now();
//     if (current - lastCall >= delay) {
//       lastCall = current;
//       func.apply(this, args);
//     }
//   };
// }

// function handleClick() {
//   console.log(`You clicked at ${new Date()}`);
// }

// const throttleClick = throttle(handleClick, 2000);

// button.addEventListener("click", () => throttleClick());

// const button = document.getElementById("button_click");

// function throttle(callback,delay){
//   let lastCall = 0
//   return function(...args){
//     const currDate = Date.now()
//     if(currDate - lastCall >= delay ){
//       lastCall = currDate
//       callback.apply(this,args)
//     }
//   }
// }

// function handleClick(){
//   console.log("Clicked at",new Date())
// }

// const throttleClick = throttle(handleClick,2000)

// button.addEventListener('click',throttleClick)

// const name_input = document.getElementById("name_input");

// function debounce(callback,delay){
//   let initialTimeId
//   return function(...args){
//     clearTimeout(initialTimeId)
//     initialTimeId = setTimeout(() => {
//       callback.apply(this,args)
//     }, delay);
//   }

// }

// function handleChange(e){
//   console.log("Value : ",e.target.value)
// }

// const debounceClick = debounce(handleChange,2000)

// name_input.addEventListener('input',debounceClick)

//-------------------JS----------------------
// const arr = [2, 4, 6, 4, 1, 8];
// console.log("arr", arr);
// function sortArr(data) {
//   for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data.length - i - 1; j++) {
//       if (data[j] > data[j + 1]) {
//         let temp = data[j];
//         data[j] = data[j + 1];
//         data[j + 1] = temp;
//       }
//     }
//   }
//   return data
// }
// console.log("sortArr", sortArr(arr));

// const recurrArr = [{ Sunday: "true" }, { Monday: "true" }]

// function recurrData(data){
//     const emptyObj = {};
//     data.forEach((element) => {
//         Object.keys(element)?.forEach((item)=>{
//             emptyObj[item] = element[item]
//         })
//     });
//     return emptyObj
// }

// console.log(recurrData(recurrArr));

// const func =(data)=>{
//   const emptyObj = {}
//   data.forEach((item)=>{
//     console.log(item);
//     Object.keys(item).forEach((it)=>{
//       emptyObj[it] = item[it]
//     })
//   })

//   return emptyObj
// }

// console.log(func(recurrArr))

// let obj1 = [
//   {
//     id: 1,
//     name: "jack",
//   },
//   {
//     id: 2,
//     name: "leo",
//   },
//   {
//     id: 3,
//     name: "annie",
//   },
// ];

// let obj2 = [
//   {
//     id: 4,
//     name: "neil",
//   },
//   {
//     id: 2,
//     name: "nitin",
//   },
//   {
//     id: 3,
//     name: "mukesh",
//   },
// ];

// const combinedArr = [...obj1, ...obj2];
// console.log("combinedArr",combinedArr);
// const onlyIds = combinedArr.map((item)=>item.id);
// console.log("onlyIds",onlyIds);
// const repeatIds = onlyIds.filter((item,ind)=>onlyIds.indexOf(item)!==ind)
// console.log(repeatIds);
// const repeatitions = combinedArr.filter((item)=>repeatIds.includes(item.id))
// console.log(repeatitions);

// const combinedObj = [...obj1,...obj2];
// const combinedObjIds = combinedObj.map((it)=>it.id)
// console.log("combinedObjIds",combinedObjIds);
// const uniqueIds = combinedObjIds.filter((item,index)=>combinedObjIds.indexOf(item)!==index);
// const outputObj = combinedObj.filter((item)=>uniqueIds.includes(item.id))
// console.log("outputObj",outputObj);

// let a = window.prompt("Enter value of A");
// function isPrimeNo(data){
//     const num = +data
//     if(num<=1){
//         return "Not a Prime Number"
//     }
//     for (let i = 2; i < num; i++) {
//         if(num%i===0){
//             return "It's not a Prime Number"
//         }
//     }
//     return "It's a Prime number"
//     console.log(num);
// }

// console.log(isPrimeNo(a));

// function isPrimeNo(data){
//   const number = +data
//   if(number<=1){
//     return "It's not a prime number ww"
//   }
//   for (let i = 2; i < number; i++) {
//     if(number%i===0){
//       return "It is not a prime number"
//     }
//   }
//   return "Prime number"
// }
// console.log(isPrimeNo(a));

// const name = window.prompt("Enter name");
// function isPalenDrome(data){
//     const strLen = data?.length;
//     for (let i = 0; i < strLen/2; i++) {
//         if(data[i]!==data[strLen - i - 1]){
//             return "Not Palendrome"
//         }
//     }
//     return "Palendrome"
//     console.log(strLen);
// }

// console.log(isPalenDrome(name));

// function isPalenDrome(data){
//   const strLen = data.length
//   for (let i = 0; i < strLen/2; i++) {
//     if(data[i]!==data[strLen - i - 1]){
//       return "Not Palendrome"
//     }

//     return "Plendrome"
//   }
// }

// console.log(isPalenDrome(name))

// const arrays = [1, 2, 3, 5, [7, 8, [9]], 4, [5], 6]

// function flatArr(data){
//     const emptyArr = []
//     data.forEach((item) => {
//         if(Array.isArray(item)){
//             emptyArr.push(...flatArr(item))
//         }
//         else{
//             emptyArr.push(item)
//         }
//     });

//     return emptyArr
// }

// console.log(flatArr(arrays));

// const flatArr=(data)=>{
//   const emptyArr = [];
//   data.forEach((item) => {
//     if(Array.isArray(item)){
//       emptyArr.push(...flatArr(item))
//     }
//     else{
//       emptyArr.push(item)
//     }
//   });
//   return emptyArr
// }
// console.log(flatArr(arrays))

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

// {
//   "name": "John",
//   "address.city": "New York",
//   "address.zip.code": 10001,
//   "address.zip.plus4": 1234
// }

//Because flattenObject is recursive, and it needs to carry forward the values of
//parentKey and result to deeper levels of recursion.

// function flattenObject(obj, parentKey = '', result = {}) {
//   for (let key in obj) {
//     console.log(key);

//     const newKey = parentKey ? `${parentKey}.${key}` : key;
//     if (typeof obj[key] === 'object') {
//       flattenObject(obj[key], newKey, result);
//     } else {
//       result[newKey] = obj[key];
//     }
//   }
//   return result;
// }

// function flattenObj(obj, parentKey = "", result = {}) {
//   for (const key in obj) {
//     const newKey = parentKey ? `${parentKey}.${key}` : key;
//     if (typeof obj[key] === "object") {
//       flattenObj(obj[key], newKey, result);
//     } else {
//       result[newKey] = obj[key];
//     }
//   }

//   return result;
// }

// console.log(flattenObj(nestedObj));

// -------------------------------------------------------------

// const planetUrl = "https://www.swapi.tech/api/planets/";
// const inputField = document.getElementById("planet_input");
// console.log(inputField);

// async function getAllPlanets() {
//   try {
//     const resp = await fetch(planetUrl);
//     const respJson = await resp.json();
//     const planets = await respJson?.results;
//     console.log("planets", planets);
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// // function debounce(){

// // }
// function handleChange(e) {
//   console.log("Searched Value : ", e.target.value);
// }

// function debounce(func,delay){
//     let initialTimeId;
//     return function(...args){
//         clearTimeout(initialTimeId);
//         setTimeout(() => {
//             func.apply(this,[])
//         }, delay);
//     }

// }
// const debouncedText = debounce(handleChange,1000)
// console.log("debouncedText",debouncedText);

// document.addEventListener("DOMContentLoaded", getAllPlanets);
// inputField.addEventListener("input", handleChange);

// -------------------------------------------------------------\


// const inputField = document.getElementById("input_field");

// function handleChange(e){
//   console.log("input",e.target.value);
// }

// function debounce(func,delay){
//   let initialTimeID;
//   return function(...args){
//     clearTimeout(initialTimeID);
//     initialTimeID = setTimeout(() => {
//       func.apply(this,args)
//     }, delay);
//   }
// }

// const debouncedText = debounce(handleChange,1000)

// inputField.addEventListener('input',debouncedText)



// const buttonClick = document.getElementById("button_click");

// // function throttle(func,delay){
// //     let initialValue = 0
// //     return function (...args){
// //         const current = Date.now();
// //         if(current - initialValue >= delay){
// //             initialValue = current
// //             func.apply(this,args)
// //         }
// //     }
// // }

// function throttle(func,delay){
  
// }

// function handleClick(){
//     console.log("you clicked button at ",new Date());
// }

// const handleThrottle = throttle(handleClick,2000)

// buttonClick.addEventListener("click",handleThrottle)




// const inputField = document.getElementById("input_field");

// function debounce(callback,delay){
//   let initialTimeId
//   return function(...args){
//     clearTimeout(initialTimeId)
//     initialTimeId = setTimeout(() => {
//       callback.apply(this,args)
//     }, delay);
//   }
// }

// function handleChange(e){
//   console.log("Value : ",e.target.value);
// }

// const debouncedValue = debounce(handleChange,1000)


// document.addEventListener("input",debouncedValue)



// const buttonClick = document.getElementById("button_click");

// function handleClick(){
//   console.log(`Clicked at`,new Date().toLocaleTimeString());
// }

// const throttleClick = 

// document.addEventListener("click",handleClick)

