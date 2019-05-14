import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Calculator from "./components/calculator/calculator";
import TicTac from "./components/tictactoeGame/tictactoe"
import Weather from "./components/weatherApp/weatherApp"
import MyProject from "./components/myProject"
import MyCart from "./components/shoppingCart/myCart"
import FilteredTable from "./components/searchTrial/filteredTable"
import NewApp from "./components/learningRouter/newApp"
import PostForm from "./components/reduxExample/postForm"
import Todos from "./components/todoApp/todos"
import Cards from "./components/stateHooks/simpleExample"


const element = <h1> hello world </h1>;

ReactDOM.render(<Cards/>, document.getElementById("root"));
registerServiceWorker();

// console.log(element);

// const person = {
//   name: "yash",
//   walk() {
//     console.log(this);
//   }
// };

// person.walk();

// const walkiee = person.walk.bind(person);
// walkiee();

// // UNDERSTAND FILTER()
// const jobs = [
//     { jobId: "1", isActive: true },
//     { jobId: "2", isActive: false },
//     { jobId: "3", isActive: false },
//     { jobId: "4", isActive: true }
// ];

// const filteredJobs = jobs.filter(job => job.jobId % 2 === 0);


// console.log(filteredJobs);

// const filt = jobs.map(function (j) {
//     // return `<li>${j.jobId}</li>`
//     return "<li>" + j.jobId + "</li>"
// })

// console.log(filteredJobs);

// //UNDERSTANDING MAP()

// const colors = ["red", "yellow", "green", "blue"];

// const arrayOfColors = colors.map(function (color) {
//   return `<li> + ${color} + </li>`;
// });
// //  '<li>' + color + '</li>' converted to template literal `<li> + ${color} + </li>`

// //USING FAT ARROW SYNTAX
// //const arrayOfColors = colors.map(color => `<li> + ${color} + </li>`);

// console.log(arrayOfColors);

// const stringOfColors = arrayOfColors.join();
// console.log(stringOfColors);

// // Object destructuring

// const address = {
//   street: "lane 2",
//   city: "mumbai",
//   country: "India"
// };

// const st = address.street;
// const ci = address.city;
// const co = address.country;

// console.log(st);
// console.log(ci);
// console.log(co);

// //now how to avoid writing address. everytime

// const { street: s, city: c, country: n } = address;

// console.log(s);
// console.log(c);
// console.log(n);

// // SPREAD OPERATOR

// const first = [1, 2, 3];  
// const second = [4, 5, 6];

// const combinedArray = [...first, ...second];
// console.log(combinedArray);

// // SPREAD OPERATOR FOR OBJECTS

// const firstObject = { name: "yash" };
// const secondObject = { job: "JS Developer" };

// const combinedObject = { ...firstObject, ...secondObject };
// console.log(combinedObject);


// const posts = [
//     { title: 'post one', body: 'this is post one' },
//     { title: 'post two', body: 'this is post two' }
// ]

// const ul = document.createElement('ul');
// document.getElementById("root").appendChild(ul)


// function getPost() {
//     setTimeout(() => {
//         // let output = '';
//         // posts.forEach((post, index) => { output += `<li>${post.title}</li>` });
//         let output=posts.map(post=>`<li>${post.title}</li>`)

//         ul.innerHTML = output;
//     }, 1000);

// }

// function creatPost(post) {
//     setTimeout(() => {
//         posts.push(post)
//     }, 2000);
// }


// getPost()

// //Since create post takes 2 seconds , third post wont be printed
// creatPost({ title: 'post three', body: 'this is post three' }) 


// //To overcome this issue , we use callback
// function getPost() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => { output += `<li>${post.title}</li>` });
//         ul.innerHTML = output;
//     }, 1000);

// }

// function creatPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }


// creatPost({ title: 'post three', body: 'this is post three' }, getPost) 


/////////  using promise  ///////////

// function getPost() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => { output += `<li>${post.title}</li>` });
//         ul.innerHTML = output;
//     }, 1000);

// }

// function creatPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             const error = false;
//             if (!error) {
//                 resolve();
//             }
//             else {
//                 reject('Error : Something went wrong yash')
//             }
//         }, 2000);
//     });
// }

// creatPost({ title: 'post three', body: 'this is post three' })
//     .then(getPost)
//     .catch(err => console.log(err))

///  <-----  OR ----->  ////

///////////// Using async / await //////////////

// async function init() {
//     await creatPost({ title: 'post three', body: 'this is post three' });
//     getPost();
// }

// init()

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => {

//         var arrayOfNames = data.map(p => p.name);
//         console.log(arrayOfNames)

//         ////method 1
//         var showHTML = arrayOfNames.map(function (personName) {
//             return `<li>${personName}</li>`
//         });
//         var list = `<ul>${showHTML.join('')}</ul>`;
//         document.getElementById("root").innerHTML += list


//         ////method 2 
//         var ulelement = document.createElement('ul');
//         var listHTML = ""
//         arrayOfNames.forEach(function (elem) {
//             listHTML = listHTML + '<li>' + elem + '</li>';
//         })
//         ulelement.innerHTML = listHTML;
//         console.log(listHTML)
//         document.getElementById("root").appendChild(ulelement)
//     })