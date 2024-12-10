const eventContainer = document.getElementById('events-container');

// Fetch upcoming events from Meetup API
const fetchEvents = async () => {
  const url = `https://api.meetup.com/find/upcoming_events?&topic_category=environment&page=10&sign=true&key=YOUR_MEETUP_API_KEY`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    
    const data = await response.json();
    const events = data.events;

    if (!events || events.length === 0) {
      eventContainer.innerHTML = '<p>No upcoming events found.</p>';
      return;
    }

    events.forEach(event => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${event.image_url || 'https://via.placeholder.com/300'}" alt="${event.name}">
        <h3>${event.name}</h3>
        <p><strong>Date:</strong> ${new Date(event.time).toLocaleDateString()}</p>
        <p>${event.venue?.name || 'Online Event'}</p>
        <a href="${event.link}" target="_blank">Learn More</a>
      `;
      eventContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching events:', error);
    eventContainer.innerHTML = '<p>Failed to load events. Please try again later.</p>';
  }
};

// Fetch data on page load
fetchEvents();
