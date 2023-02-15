const cards = document.querySelectorAll('.block');
let clickCount = 0;
let flipcard = false;
let first,second;
let openBoxes = 0;
function flipCard() {
    if(clickCount < 1) {
    this.classList.toggle('flip');
        if(!flipcard) {
            flipcard = true;
             first = this;
             return;
        }
        second = this;
        flipcard = false;
            if(first.dataset.logo === second.dataset.logo) {
                openBoxes++; 
                setTimeout(() => {
                first.classList.add('flip');
                second.classList.add('flip');
                clickCount = 0;
               }, 15);
            }
            else{
                setTimeout(() => {
                    first.classList.remove('flip');
                    second.classList.remove('flip');
                    clickCount = 0;
                }, 1000);
            }
            if(openBoxes === 8 ) {
                setTimeout(() => {
                location.reload();
                }, 2000);
            }
            
    }
    clickCount++;
}
(function shuffle() {
    for(let i = 0; i < cards.length; i++) {
        let change = Math.floor(Math.random() * 16);
        cards[i].style.order = change;
    }
     })();

for(let i = 0; i < cards.length; i++) {
cards[i].addEventListener('click',flipCard);
}






