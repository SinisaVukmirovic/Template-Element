const APIurl = 'https://jsonplaceholder.typicode.com/users';

const searchInput = document.querySelector('[data-search-input]');
const userCardsContainer = document.querySelector('[data-user-cards-container]');
const userCardTemplate = document.querySelector('[data-usercard-template]');

let users = [];

fetch(APIurl)
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0];

            const cardHeader = card.querySelector('[data-card-header]');
            const cardBody = card.querySelector('[data-card-body]');

            cardHeader.textContent = user.name;
            cardBody.textContent = user.email;

            userCardsContainer.append(card);

            return { name: user.name, email: user.email, element: card }
        });
    });

const searchUsers = (e) => {
    const value = e.target.value.toLowerCase();
    
    users.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value);

        user.element.classList.toggle('hide', !isVisible);
    });
}

searchInput.addEventListener('input', searchUsers);