# Event Ticket Booking Website Inspired by TKT.ge

#### Video Demo:  
[Insert your demo video URL here]

---

### Description

This project is a fully responsive, multi-language event ticket booking website inspired by Georgia’s popular platform TKT.ge. It provides users with an intuitive and seamless experience to browse and book tickets for concerts, theater, sports, travel, and other events throughout Georgia.

Built with **HTML5**, **CSS3** (using Flexbox and CSS Grid), and **JavaScript**, this front-end-only application focuses on usability, accessibility, and localization. It supports both **English** and **Georgian** languages, allowing users to switch dynamically between them without reloading the page.

Key features include interactive login and registration modals with real-time client-side validation, password strength checking, event carousels and filtering, and a clean, modular codebase structured for scalability.

---

### Project Structure and File Overview

The project is organized into folders for each section of the website, each containing its own HTML, CSS, and JavaScript files, as well as shared assets and configuration files:

- **/main/**  
  - `main.html`: Homepage featuring navigation, language toggle, event slider, and featured/popular events  
  - `main.css`: Styles for layout, responsiveness, header/footer, and UI components  
  - `main.js`: Controls slider functionality, modal popups (login/register), language switching (using `lang.json`), and event navigation

- **/music/**  
  - `music.html`: Dedicated page for concerts and music events with filtering options  
  - `music.css`: Styles for the music event grid and filters  
  - `music.js`: Logic to filter events by date and dynamically populate results

- **/event/**  
  - `event.html`: Detailed event page with full event information and booking options  
  - `event.css`: Styling for event detail layout  
  - `event.js`: Additional JavaScript for event-specific interactions

- **/about/** and **/contact/**  
  - `about.html` & `contact.html`: Informational and contact pages  
  - `about.css` & `contact.css`: Page-specific styling  
  - `about.js` & `contact.js`: Handle UI interactions and language toggling

- **/imgs/**  
  - `/icons/`: Brand logos and UI icons  
  - `/pictures/`: Event images used throughout the site

- **`lang.json`**  
  A JSON translation file mapping UI text keys to English (`en`) and Georgian (`ka`). This file is used by JavaScript to dynamically update text and placeholders for language switching.

- **`package.json` & `package-lock.json`**  
  Node.js configuration files managing dependencies such as jQuery, which is included for select DOM manipulations.

---

### Core Features

- **Multilingual User Interface**  
  Allows users to toggle seamlessly between English and Georgian. All text and placeholders update dynamically using the JSON-based translation system with `data-key` attributes.

- **Responsive Design**  
  Utilizes CSS Flexbox and Grid to ensure a consistent and accessible experience on desktop, tablet, and mobile devices.

- **Login and Registration Modals**  
  Popup forms with real-time client-side validation for email, password strength, password confirmation, and mobile number format.

- **Password Strength Checker**  
  Visual feedback categorizing passwords as weak, medium, or strong based on character composition.

- **Event Carousel and Popular Listings**  
  The homepage features an automatic and manual event slider along with dynamically generated popular event cards linking to detailed event pages.

- **Event Filtering**  
  Music events can be filtered by date on the dedicated music page.

- **Form Validation and Accessibility**  
  HTML5 validation is enhanced with JavaScript for immediate inline user feedback.

- **Cookie Usage**  
  Stores user preferences such as selected language to improve user experience.

---

### JavaScript Functionalities Explained

- **Language Switching**  
  Uses the `lang.json` file to update UI text and placeholders dynamically based on the user's language selection without page reloads.

- **Popup Management**  
  Controls login and registration modals, including show/hide behaviors and toggling password visibility.

- **Form Validation**  
  Validates user input with real-time feedback:  
  - Email format must contain "@" and a dot (`.`) with at least two characters after  
  - Passwords require a minimum of 8 characters  
  - Confirmation password must match the original  
  - Mobile number must contain only digits

- **Password Strength Indicator**  
  Analyzes the password and updates feedback for weak (letters only), medium (letters and numbers), or strong (mixed case letters and numbers).

- **Event Slider and Navigation**  
  Controls the automatic cycling and manual navigation of featured events on the homepage. Clicking event cards redirects users to the respective event details page.

---

### Design Decisions and Trade-offs

- **Vanilla JavaScript with Selective jQuery**  
  The project avoids heavy frameworks, using native JS for most logic and jQuery only for certain DOM manipulations to keep code maintainable and lightweight.

- **Modal-based Authentication UI**  
  Login and registration via popups enable smooth, page-reload-free user interaction.

- **Lightweight JSON Translation Instead of Full i18n Libraries**  
  A simple JSON + data-key approach was chosen for easier maintainability and educational clarity.

- **Modular File Organization**  
  Separating JS and CSS files per page improves maintainability, helps isolate bugs, and enhances scalability.

- **Static Content**  
  Event data is hardcoded into HTML for simplicity, recognizing this limits scalability and dynamic updates but suits this front-end demo project.

---

### Summary

This project is a complete, user-friendly front-end web application that mimics a professional ticket booking platform. It demonstrates solid skills in:

- Semantic HTML5 and responsive CSS layout  
- Interactive JavaScript logic including modals, validation, and dynamic content updates  
- Multilingual support via JSON translation  
- Modular and scalable project architecture

The site is fully responsive, accessible, and easy to navigate, providing a great foundation for a real-world event booking system.
