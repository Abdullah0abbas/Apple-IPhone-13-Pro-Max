let image = document.querySelector('#main-img')
let container = document.querySelector('.container');

function phones(phone){
    image.src = phone;
}

function colors(color){
    container.style.background = color;
}

// OR

// let img1 = document.querySelector('#image1')
// let img2 = document.querySelector('#image2')
// let img3 = document.querySelector('#image3')
// let img4 = document.querySelector('#image4')
// let img5 = document.querySelector('#image5')

// img1.onclick = () =>{
//     container.style.backgroundColor = "#000";
// }

// img2.onclick = () =>{
//     container.style.backgroundColor = "#247ec8";
// }

// img3.onclick = () =>{
//     container.style.backgroundColor = "#1e1e1e";
// }

// img4.onclick = () =>{
//     container.style.backgroundColor = "#c79b53";
// }

// img5.onclick = () =>{
//     container.style.backgroundColor = "#c82525";
// }