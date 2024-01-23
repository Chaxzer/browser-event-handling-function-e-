// document.getElementById("btn1").addEventListener("click", date);

// function date() {
//   document.getElementById("demo").innerHTML = Date();
// }




//  let x = function(e) {

//-------------The "e" inside the function represents the event object. So basically, when the button is clicked, something will happen in the code.-----------------

// box1.innerHTML = `<H2> Hello There </H2>`;
  
// };

// btn.addEventListener('click', x)


//  let y = function(e) {

//-------------The "e" inside the function represents the event object. So basically, when the button is clicked, something will happen in the code.-----------------


// box1.innerHTML = `<H2> GEneral kenobi</H2>`;

// };
// btn.addEventListener('click', y)
                     
// let a = prompt( "GENERAL GREVIOUS" )

// console.log(a)
// if (a === "hello there") {
//   btn.removeEventListener('click', x)
// }




let x = (e) => {  // lets use arrow function instead of function(e)
  box1.innerHTML = `<H2> General Grevious </H2>`;
};

btn.addEventListener('click', x);

let y = (e) => {
  box1.innerHTML = `<H2> General kenobi</H2>`;
};
btn.addEventListener('click', y);

let a = prompt("you see GENERAL GREVIOUS");

console.log(a);

if (a == "hello there") {
  btn.removeEventListener('click', y);
}