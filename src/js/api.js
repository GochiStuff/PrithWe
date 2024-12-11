const apiUrl = 'https://globalearthchallenge.earthday.org/api/search/v1/catalog?token=Yash';
const token = 'Yash'; // Add your token if required.

async function fetchCatalog() {
    try {
        const response = await fetch(`${apiUrl}?token=${token}`, {
            headers: {
                Accept: 'application/json',
            },
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        displayResources(data.collections);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function displayResources(collections) {
    const container = document.getElementById('resources');
    collections.forEach((collection) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h2>${collection.label}</h2>
            <p>Target Entity: ${collection.targetEntity}</p>
        `;
        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', fetchCatalog);
