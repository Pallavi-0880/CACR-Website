const modal = document.querySelector('.modal');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');


//Nitin Wadhwani
const nitin_btn = document.querySelector('.card-nitin');
const card_display_nitin = document.querySelector('.card-display-nitin');
const close_btn_nitin = document.querySelector('.close_btn_nitin');


//Indira Malkani
const indira_btn = document.querySelector('.card-indira');
const card_display_indira = document.querySelector('.card-display-indira');
const close_btn_indira = document.querySelector('.close_btn_indira');


//MP Singh
const mpsingh_btn = document.querySelector('.card-mpsingh');
const card_display_mpsingh = document.querySelector('.card-display-mpsingh');
const close_btn_mpsingh = document.querySelector('.close_btn_mpsingh');

// aswhin kumar
const aswhin_btn = document.querySelector('.card-aswhin');
const card_display_aswhin = document.querySelector('.card-display-aswhin');
const close_btn_aswhin = document.querySelector('.close_btn_aswhin');



//Card Display Nitin Wadhwani
nitin_btn.addEventListener('click', () => {
    if(card_display_nitin.classList.contains('hidden')) {
        card_display_nitin.classList.remove('hidden');
    }
    else {
        card_display_nitin.classList.add('hidden');
    }
});

// Card Display Indira
indira_btn.addEventListener('click', () => {
    if(card_display_indira.classList.contains('hidden')) {
        card_display_indira.classList.remove('hidden');
    }
    else {
        card_display_indira.classList.add('hidden');
    }
});

// Card Display MP Singh
mpsingh_btn.addEventListener('click', () => {
    if(card_display_mpsingh.classList.contains('hidden')) {
        card_display_mpsingh.classList.remove('hidden');
    }
    else {
        card_display_mpsingh.classList.add('hidden');
    }
});

// Card Display Aswhin kumar
aswhin_btn.addEventListener('click', () => {
    if(card_display_aswhin.classList.contains('hidden')) {
        card_display_aswhin.classList.remove('hidden');
    }
    else {
        card_display_aswhin.classList.add('hidden');
    }
});


//When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
    if(event.target === modal2 || event.target === modal || event.target === modal3){
        modal.classList.add('hidden');
        modal2.classList.add('hidden');
        modal3.classList.add('hidden');
    }
}

//Close Buttons
close_btn_nitin.addEventListener('click', () => {
    card_display_nitin.classList.add('hidden');
});

close_btn_indira.addEventListener('click', () => {
    card_display_indira.classList.add('hidden');
});

close_btn_mpsingh.addEventListener('click', () => {
    card_display_mpsingh.classList.add('hidden');
});
close_btn_aswhin.addEventListener('click', () => {
    card_display_aswhin.classList.add('hidden');
});