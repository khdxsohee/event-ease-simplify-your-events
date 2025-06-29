const events = [
  { title: "Lahore Music Night", category: "Music", desc: "Enjoy the best live music with local bands in Lahore." },
  { title: "TechStars Conference", category: "Tech", desc: "A meetup for tech entrepreneurs and developers." },
  { title: "Art & Soul", category: "Art", desc: "A colorful display of artwork from young artists." },
  { title: "Startup Pitch Fest", category: "Tech", desc: "Pitch your startup ideas to VCs and mentors." },
  { title: "Sufi Music Gala", category: "Music", desc: "Soulful Sufi melodies under the stars." }
];

const eventList = document.getElementById('eventList');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

const modal = document.getElementById('eventModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const registerBtn = document.getElementById('registerBtn');
const closeModal = document.getElementById('closeModal');
const toast = document.getElementById('toast');

let selectedEvent = null;

function displayEvents(filtered = events) {
  eventList.innerHTML = "";
  filtered.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `<h4>${event.title}</h4><p>${event.category}</p>`;
    card.addEventListener('click', () => openModal(event));
    eventList.appendChild(card);
  });
}

function openModal(event) {
  selectedEvent = event;
  modalTitle.textContent = event.title;
  modalDesc.textContent = event.desc;
  modal.style.display = 'flex';
}

function showToast() {
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
}

registerBtn.addEventListener('click', () => {
  showToast();
  modal.style.display = 'none';
});

closeModal.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = 'none';
};

// Filter logic
searchInput.addEventListener('input', filterEvents);
categoryFilter.addEventListener('change', filterEvents);

function filterEvents() {
  const keyword = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const filtered = events.filter(event => {
    const matchKeyword = event.title.toLowerCase().includes(keyword);
    const matchCategory = category === "all" || event.category === category;
    return matchKeyword && matchCategory;
  });
  displayEvents(filtered);
}

displayEvents();
