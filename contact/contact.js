document.addEventListener('DOMContentLoaded', () => {
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
                  if (element.tagName === "INPUT" || element.tagName === "TEXTAREA" || element.tagName ==="BUTTON") {
                      element.placeholder = translations[lang][key];
                  } else {
                      element.textContent = translations[lang][key];
                  }
              }
          });
        }
    
    

    const grid = document.getElementById('grid');
    const items = grid.querySelectorAll('.popular-box');
    items.forEach(item => {
        item.addEventListener('click', () => {
            const eventId = item.getAttribute('data-id');
            window.location.href = `../event/event.html?id=${eventId}`;
        });
    });
  });