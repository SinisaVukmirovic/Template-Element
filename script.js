const APIurl = 'https://jsonplaceholder.typicode.com/users';

const userCardTemplate = document.querySelector('[data-usercard-template]');
const userCardsContainer = document.querySelector('[data-user-cards-container]');

fetch(APIurl)
    .then(res => res.json())
    .then(data => {
        data.forEach(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0];

            const cardHeader = card.querySelector('[data-card-header]');
            const cardBody = card.querySelector('[data-card-body]');

            cardHeader.textContent = user.name;
            cardBody.textContent = user.name;

            userCardsContainer.append(card);
        });
    });