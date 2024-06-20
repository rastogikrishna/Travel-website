document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const destinationsGrid = document.querySelector('.destinations-grid');

    // Example destination data
    const destinations = [
        { name: 'Paris', image: 'https://lp-cms-production.imgix.net/2021-05/shutterstockRF_1321418885.jpg?auto=format&fit=crop&ar=1:1&q=75&w=1200', description: 'The City of Light.' },
        { name: 'New York', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG92p6s50YsiIihzSUPhcsSP4evyCaV4PCXw&s', description: 'The Big Apple.' },
        { name: 'Tokyo', image: 'https://lp-cms-production.imgix.net/2024-02/shutterstockRF1075025648.jpg?auto=format&fit=crop&ar=1:1&q=75&w=1200', description: 'A bustling metropolis.' },
        // Add more destinations here
    ];

    // Populate destinations grid
    destinations.forEach(destination => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}">
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
        `;
        destinationsGrid.appendChild(card);
    });

    // Search functionality
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const searchTerm = document.getElementById('search').value.toLowerCase();
        const filteredDestinations = destinations.filter(destination =>
            destination.name.toLowerCase().includes(searchTerm)
        );

        destinationsGrid.innerHTML = '';
        filteredDestinations.forEach(destination => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${destination.image}" alt="${destination.name}">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
            `;
            destinationsGrid.appendChild(card);
        });
    });
});
