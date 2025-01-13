console.log("Testing Responsive Navigation");

// Variable Declarations
const menu_icon = document.querySelector('#menu_icon');
const mob_nav = document.querySelector('#mob_nav');



//Event Listeners
menu_icon.addEventListener('click', () => {
    // console.log("Menu Icon");
    if(mob_nav.classList.contains('hidden')){
        mob_nav.classList.remove('hidden');
    }
    else {
        mob_nav.classList.add('hidden');
    }
})
// console.log(menu_icon,mob_nav);

//Inside mob navigation

//Variable Declarations

//Programs
const mob_menu_icon = document.querySelector('#mob_programs_btn');
const mob_programs_menu = document.querySelector('#mob_programs_menu');
const mob_prog = document.querySelector('#mob_prog');
// console.log(mob_programs_menu);

//Resouces
const mob_resources_btn = document.querySelector('#mob_resources_btn');
const mob_resources_menu = document.querySelector('#mob_resources_menu');
const mob_resource = document.querySelector('#mob_resource');


//Event Listeners

//1. Programs
mob_menu_icon.addEventListener('click', () => {
    // console.log("Mob Menu");
    if(mob_programs_menu.classList.contains('hidden')){
        mob_programs_menu.classList.remove('hidden');
    }
    else {
        mob_programs_menu.classList.add('hidden');
    }
})

mob_prog.addEventListener('click', () => {
    if(mob_programs_menu.classList.contains('hidden')){
        mob_programs_menu.classList.remove('hidden');
    }
    else {
        mob_programs_menu.classList.add('hidden');
    }
})

//2. Resources
mob_resources_btn.addEventListener('click', () => {
    if(mob_resources_menu.classList.contains('hidden')){
        mob_resources_menu.classList.remove('hidden');
    }
    else {
        mob_resources_menu.classList.add('hidden');
    }
})

mob_resource.addEventListener('click', () => {
    if(mob_resources_menu.classList.contains('hidden')){
        mob_resources_menu.classList.remove('hidden');
    }
    else {
        mob_resources_menu.classList.add('hidden');
    }
})



//3. Contact 