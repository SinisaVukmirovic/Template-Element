const APIurl = 'https://randomuser.me/api/?results=30';

const userCardsContainer = document.querySelector('[data-user-cards-container]');
const userCardTemplate = document.querySelector('[data-usercard-template]');

fetch(APIurl)
    .then(res => res.json())
    .then(data => {
        const users = data.results;
        console.log(users);

        users.forEach(user => {
            user = { 
                name: `${user.name.first} ${user.name.last}`, 
                email: user.email,
                pic: user.picture.medium
            }

        const card = userCardTemplate.content.cloneNode(true).children[0];

        const cardProfile = card.querySelector('[data-card-profile]');
        const cardHeader = card.querySelector('[data-card-header]');
        const cardBody = card.querySelector('[data-card-body]');

        cardProfile.src = user.pic;
        cardHeader.textContent = user.name;
        cardBody.textContent = user.email;

        userCardsContainer.append(card);
    });       
});