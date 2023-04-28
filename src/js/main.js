window.addEventListener('DOMContentLoaded', () => {
    function createOfferCard() {
        const parentSelector = document.querySelector('.offer__cards');
        class Card {
            constructor(src,text,icon,) {
                this.src = src;
                this.text = text;
                this.icon = icon;
            }

            createCard() {
                let card = document.createElement('div');
                card.classList.add('offer__card');
                card.innerHTML = `
                    <img src="${this.src}" alt="" class="offer__card_img">
                    <h3 class="offer__card_title">
                        ${this.text};
                    </h3>
                    <div class="offer__card_hover">
                        <img src="${this.icon}" alt="" class="offer__hover_img">
                    </div>
                `;

                parentSelector.prepend(card);
            }
        }

        fetch('../json/cards.json')
            .then(data => data.json())
                .then(data => data.offerCards)
                    .then(data => data.forEach(item => {
                        new Card(item.src, item.text,item.icon).createCard();
                    }))
            
    };
    function createWorkCard() {
        const parentSelector = document.querySelector('.work__cards');
        class Card {
            constructor(src,number,text) {
                this.src = src;
                this.number = number;
                this.text = text;
            }

            createCard() {
                let card = document.createElement('div');
                card.classList.add('work__card');
                card.innerHTML = ` 
                    <img src="${this.src}" alt="" class="work__card_img">
                    <div class="work__card_text">
                        <span class="work-number">${this.number}</span>
                        <h4>
                           ${this.text};
                        </h4>
                    </div>
                `;

                parentSelector.prepend(card);
            }
        }

        fetch('../json/cards.json')
            .then(data => data.json())
                .then(data => data.workCards)
                    .then(data => data.forEach(item => {
                        new Card(item.src, item.number,item.text).createCard();
                    }));
    }
    function createPartnersCard() {
        const parentSelector = document.querySelector('.partners__cards');
        class Card {
            constructor(src) {
                this.src = src;
            }
            createCard() {
                let card = document.createElement('img');
                card.src = `${this.src}`;
                parentSelector.append(card);
            }
        }

        fetch('../json/cards.json')
            .then(data => data.json())
                .then(data => data.partnersCards)
                        .then(data => data.forEach(item => {
                            new Card(item.src).createCard();
                        }));
    }
    createWorkCard();
    createOfferCard();
    createPartnersCard();
});