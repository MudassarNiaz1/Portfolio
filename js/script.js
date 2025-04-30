// Dark mode toggle
const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  // Toggle dark mode class on the body element
  document.body.classList.toggle('dark');
  // Change button text based on current theme
  toggleButton.textContent = document.body.classList.contains('dark') ? "☀️" : "🌙";
});

// Scroll reveal effect
window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach((reveal) => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;

    // Add 'active' class if the element is in view, else remove it
    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
    } else {
      reveal.classList.remove('active');
    }
  });
});

// Glowing border effect on form
const form = document.querySelector('#contact-form');

// Add glowing effect when mouse enters the form
form.addEventListener('mouseenter', () => {
  form.classList.add('glow');
});

// Remove glowing effect when mouse leaves the form
form.addEventListener('mouseleave', () => {
  form.classList.remove('glow');
});

// Track cursor position and apply custom properties for glowing effect
form.addEventListener('mousemove', (e) => {
  const formRect = form.getBoundingClientRect();
  const x = e.clientX - formRect.left;
  const y = e.clientY - formRect.top;

  // Set custom CSS properties for glowing effect (adjust as needed)
  form.style.setProperty('--cursor-x', `${x}px`);
  form.style.setProperty('--cursor-y', `${y}px`);
});

// Typewriter effect for the name
const nameText = "Mudassar Niaz"; // Your name
const nameTarget = document.getElementById("typewriter-name");
let nameIndex = 0;

function typeName() {
  if (nameIndex < nameText.length) {
    nameTarget.textContent += nameText.charAt(nameIndex);
    nameIndex++;
    setTimeout(typeName, 150); // typing speed in ms
  }
}

window.addEventListener("DOMContentLoaded", typeName);
