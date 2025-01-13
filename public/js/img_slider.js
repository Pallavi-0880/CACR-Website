// Slider Project

//variables
let mainImg = document.getElementById('mainImg');
let thumb1 = document.getElementById('thumb1');
let thumb1Src = document.getElementById('thumb1').src;
let thumb2 = document.getElementById('thumb2');
let thumb2Src = document.getElementById('thumb2').src;
let thumb3 = document.getElementById('thumb3');
let thumb3Src = document.getElementById('thumb3').src;
// let thumb4 = document.getElementById('thumb4');
// let thumb4Src = document.getElementById('thumb4').src;

//Event Listeners
thumb1.addEventListener('click', () => {
    mainImg.src = thumb1Src
})

thumb2.addEventListener('click', () => {
    mainImg.src = thumb2Src
})

thumb3.addEventListener('click', () => {
    mainImg.src = thumb3Src
})

// thumb4.addEventListener('click', () => {
//     mainImg.src = thumb4Src
// })
