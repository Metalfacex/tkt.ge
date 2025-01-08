



const slides = [
    'https://tkt.ge/_next/image?url=https%3A%2F%2Fstatic.tkt.ge%2Fimg%2Fe14a5852-727b-466a-a705-2e5a0a05083c.jpeg&w=1920&q=75',
    'https://tkt.ge/_next/image?url=https%3A%2F%2Fstatic.tkt.ge%2Fimg%2Fafdd9e49-7d41-4eca-881a-cc560c5642e4.jpeg&w=1920&q=75',
    'https://tkt.ge/_next/image?url=https%3A%2F%2Fstatic.tkt.ge%2Fimg%2F70c5f3e7-d981-45fd-9a47-b8e273c7fa25.jpeg&w=1920&q=75'
];

let currentSlide = 0;
const slider = document.querySelector('.slider img');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');


function updateMainSlider() {
    slider.src = slides[currentSlide];
}

leftArrow.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    updateMainSlider();
});

rightArrow.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateMainSlider();
});

const popularBoxes = document.querySelectorAll('.popular-box');
const popularLeft = document.querySelector('.popular-arrow.left');
const popularRight = document.querySelector('.popular-arrow.right');
let popularStart = 0;

popularLeft.addEventListener('click', () => {
    popularStart = (popularStart > 0) ? popularStart - 3 : popularBoxes.length - 3;
    updatePopularSlider();
});

popularRight.addEventListener('click', () => {
    popularStart = (popularStart + 3) % popularBoxes.length;
    updatePopularSlider();
});

function updatePopularSlider() {
    popularBoxes.forEach((box, index) => {
        const position = (index - popularStart + popularBoxes.length) % popularBoxes.length;
        box.style.order = position;

       
        if (position >= 0 && position < 3) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
}


updateMainSlider();
updatePopularSlider();





const dateSlider = document.getElementById("date-slider");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const currentMonthLabel = document.getElementById("current-month");

const today = new Date();
const startDate = new Date(today);
startDate.setDate(1); // Start from the first of the current month
startDate.setMonth(today.getMonth()); // Start 1 month back
const endDate = new Date(today);
endDate.setMonth(today.getMonth() + 2); // End 2 months ahead

// Function to generate dates dynamically
function generateDates(start, end) {
    let currentDate = new Date(start);
    while (currentDate <= end) {
        const day = currentDate.getDate();
        const weekDay = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
        const month = currentDate.toLocaleDateString('en-US', { month: 'short' });

        const dateDiv = document.createElement("div");
        dateDiv.className = "date-item";
        dateDiv.dataset.month = month; // Store the month for tracking
        if (currentDate.toDateString() === today.toDateString()) {
            dateDiv.classList.add("today");
        }
        if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
            dateDiv.classList.add("weekend");
        }

        dateDiv.innerHTML = `
            <div class="date-month">${month}</div>
            <div class="date-day">${day}</div>
            <div class="date-weekday">${weekDay}</div>
        `;
        dateSlider.appendChild(dateDiv);

        // Increment by 1 day
        currentDate.setDate(currentDate.getDate() + 1);
    }
}

// Function to update the displayed month
function updateCurrentMonth() {
    const firstVisibleItem = [...dateSlider.children].find((child) => {
        const rect = child.getBoundingClientRect();
        return rect.left >= dateSlider.getBoundingClientRect().left;
    });

    if (firstVisibleItem) {
        const visibleMonth = firstVisibleItem.dataset.month;
        currentMonthLabel.textContent = visibleMonth;
    }
}

// Generate the dates for the slider
generateDates(startDate, endDate);

// Initial update of the month label
updateCurrentMonth();

// Scroll buttons functionality
prevBtn.addEventListener("click", () => {
    dateSlider.scrollBy({ left: -300, behavior: "smooth" });
    setTimeout(updateCurrentMonth, 300); // Delay to allow scroll to complete
});

nextBtn.addEventListener("click", () => {
    dateSlider.scrollBy({ left: 300, behavior: "smooth" });
    setTimeout(updateCurrentMonth, 300); // Delay to allow scroll to complete
});

// Update the month as the user scrolls
dateSlider.addEventListener("scroll", () => {
    updateCurrentMonth();
});



const altPopularBoxes = document.querySelectorAll('.alt-popular-box');
const altPopularLeft = document.querySelector('.alt-popular-arrow.alt-left');
const altPopularRight = document.querySelector('.alt-popular-arrow.alt-right');
let altPopularStart = 0;

altPopularLeft.addEventListener('click', () => {
    altPopularStart = (altPopularStart > 0) ? altPopularStart - 3 : altPopularBoxes.length - 3;
    updateAltPopularSlider();
});

altPopularRight.addEventListener('click', () => {
    altPopularStart = (altPopularStart + 3) % altPopularBoxes.length;
    updateAltPopularSlider();
});

function updateAltPopularSlider() {
    altPopularBoxes.forEach((box, index) => {
        const position = (index - altPopularStart + altPopularBoxes.length) % altPopularBoxes.length;
        box.style.order = position;

        if (position >= 0 && position < 3) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
}

updateAltPopularSlider();
