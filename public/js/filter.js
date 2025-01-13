let list = document.querySelectorAll('.list');
let people = document.querySelectorAll('.people');

for(let i = 0; i<list.length; i++) {
    list[i].addEventListener('click', function() {
        for(let j = 0; j<list.length; j++) {
            list[j].classList.remove('active');
        }
        this.classList.add('active');
        console.log(this)
        let dataFilter = this.getAttribute('data-filter');
        console.log('DataFilter',dataFilter);

        for(let k = 0; k<people.length; k++) {
            people[k].classList.remove('active');
            people[k].classList.add('hide');
            // console.log(dataFilter,people[k].getAttribute('data-item'));
            if(people[k].getAttribute('data-item') == dataFilter){
                people[k].classList.remove('hide');
                people[k].classList.add('active');
            }
        }
    })
}