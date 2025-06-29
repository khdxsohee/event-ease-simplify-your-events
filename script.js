const events = [
  { title: "Music Fest", desc: "Live music and fun activities." },
  { title: "Tech Meetup", desc: "Network with industry professionals." },
  { title: "Art Expo", desc: "Explore local and international art." }
];

const eventList = document.getElementById('eventList');
const modal = document.getElementById('eventModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeModal = document.getElementById('closeModal');

events.forEach(event => {
  const card = document.createElement('div');
  card.className = 'event-card';
  card.innerHTML = `<h4>${event.title}</h4><p>${event.desc.slice(0, 40)}...</p>`;
  card.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalTitle.textContent = event.title;
    modalDesc.textContent = event.desc;
  });
  eventList.appendChild(card);
});

closeModal.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = 'none';
};
