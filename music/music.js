document.addEventListener('DOMContentLoaded', () => {


    const grid = document.getElementById('grid');
    const todayBtn = document.getElementById('btn-today');
    const tomorrowBtn = document.getElementById('btn-tomorrow');
    const weekendBtn = document.getElementById('btn-weekend');
    const datePicker = document.getElementById('date-picker');

    const today = new Date();

    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };

    const filterGrid = (filterDate) => {
        const items = grid.querySelectorAll('.grid-item');
        items.forEach(item => {
            const itemDate = item.getAttribute('data-date');
            if (itemDate === filterDate) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    };

    todayBtn.addEventListener('click', () => {
        filterGrid(formatDate(today));
    });

    tomorrowBtn.addEventListener('click', () => {
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        filterGrid(formatDate(tomorrow));
    });

    weekendBtn.addEventListener('click', () => {
        const weekend = ['Saturday', 'Sunday'];
        const items = grid.querySelectorAll('.grid-item');
        items.forEach(item => {
            const itemDate = new Date(item.getAttribute('data-date'));
            const dayName = itemDate.toLocaleDateString('en-US', { weekday: 'long' });
            if (weekend.includes(dayName)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    datePicker.addEventListener('change', (e) => {
        filterGrid(e.target.value);
    });

    fetch("../lang.json")
    .then(response => response.json())
    .then(translations => {
      
        document.getElementById("en").addEventListener("click", () => switchLanguage("en", translations));
        document.getElementById("ka").addEventListener("click", () => switchLanguage("ka", translations));
    });

function switchLanguage(lang, translations) {
  document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        if (translations[lang][key]) {
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
  }

    const items = grid.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            const eventId = item.getAttribute('data-id');
            window.location.href = `../event/event.html?id=${eventId}`;
        });
    });
});