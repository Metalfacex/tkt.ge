const events = [
    {
        id: "1",
        title: "456 Fusion x Glitz Community",
        date: "February 20, 2025",
        description: "Experience a fusion of music and community vibes at Terrace Orbeliani.",
        price: "From $80",
        banner: "https://static.tkt.ge/img/e69e93d3-85de-4f46-8b7f-e39283c8622f.jpeg"
    },
    {
        id: "2",
        title: "Society Tbilisi Presents Jonni Gil",
        date: "March 10, 2025",
        description: "A night to remember at Golden Tulip Design Tbilisi with Jonni Gil.",
        price: "From $35",
        banner: "https://static.tkt.ge/img/9cfe887e-4e78-4d99-8d46-82cba6ebb8ae.jpeg"
    },
    {
        id: "3",
        title: "Vivaldi. The Four Seasons.",
        date: "March 15, 2025",
        description: "Experience the classical masterpiece live at Griboedov Theater.",
        price: "From $60",
        banner: "https://static.tkt.ge/img/d2bdc3fc-d99e-4639-89ca-812e754776ad.jpeg"
    },
    {
        id: "4",
        title: "House of Disco Vol 4",
        date: "March 25, 2025",
        description: "Dance to the beats at Weather Report Sky Bar.",
        price: "From $20",
        banner: "https://static.tkt.ge/img/f85e44d1-adc0-4b42-9d68-db6d4cbcb83b.jpeg"
    },
    {
        id: "5",
        title: "Gunflower at Botanico",
        date: "April 5, 2025",
        description: "Groove with Gunflower at the beautiful Botanico Tbilisi.",
        price: "From $39",
        banner: "https://static.tkt.ge/img/4e164149-8dff-4c9d-9139-294ffc78cc12.jpeg"
    },
    {
        id: "6",
        title: "OLD NEW YEAR",
        date: "January 5, 2025",
        description: "Palace of Rituals.",
        price: "From $100",
        banner: "https://static.tkt.ge/img/008cd01e-b0c0-4594-977b-2e231e03a6f0.jpeg"
    }
];

// Get event ID from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const eventId = urlParams.get("id");

// Find the event by ID
const event = events.find(e => e.id === eventId);

// Populate the page with event data
const selectedEvent = events.find(e => e.id === eventId);

if (selectedEvent) {
    document.getElementById("banner").style.backgroundImage = `url(${selectedEvent.banner})`;
    document.getElementById("title").setAttribute("data-key", `event_title_${selectedEvent.id}`);
    document.getElementById("date").setAttribute("data-key", `event_date_${selectedEvent.id}`);
    document.getElementById("description").setAttribute("data-key", `event_description_${selectedEvent.id}`);
    document.getElementById("price").setAttribute("data-key", `event_price_${selectedEvent.id}`);

    document.getElementById("title").textContent = selectedEvent.title;
    document.getElementById("date").textContent = selectedEvent.date;
    document.getElementById("description").textContent = selectedEvent.description;
    document.getElementById("price").textContent = selectedEvent.price;
} else {
    document.querySelector(".container").innerHTML = "<p>Event not found. Please go back to the events page.</p>";
}


document.addEventListener('DOMContentLoaded', () => {
    fetch("../lang.json")
        .then(response => response.json())
        .then(translations => {
            document.getElementById("en").addEventListener("click", () => switchLanguage("en", translations));
            document.getElementById("ka").addEventListener("click", () => switchLanguage("ka", translations));


            switchLanguage("en", translations);
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
});
