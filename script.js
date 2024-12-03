//   document.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', e => {
//       if (link.href.startsWith(window.location.origin)) { // Internal links only
//         e.preventDefault(); // Stop default navigation
//         document.body.classList.add('fade-out'); // Add fade-out effect
//         setTimeout(() => {
//           window.location = link.href; // Navigate after effect
//         }, 250); // Delay matches transition duration
//       }
//     });
//   });


const images = [
    'url("img/FP - Bg1.jpeg")',
    'url("https://www.khasstores.com/cdn/shop/articles/khas-bed-sheets-end-of-season-sale-bed-set-online-shopping-pakistan-142106.jpg?v=1603099559")',
    'url("img/FP - Bg2.jpeg")',
    'url("img/FP - Bg3.jpeg")',
    'url("img/Bedsheet Bg1.webp")',
    'url("img/Bedsheet Bg2.webp")',
    'url("img/bg-contactsec.jpeg")',
    'url("img/contact-form.jpeg")',
    'url("https://plus.unsplash.com/premium_photo-1670869816769-c64fbc7b9c4c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
];

// Function to shuffle the images array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Random index
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Shuffle images array before starting
shuffleArray(images);

let currentIndex = 0; // Current slide index
const bgSlider = document.getElementById('bgSlider');
let slideInterval; // Variable to store the interval

// Function to update the background image
function updateBackground() {
    bgSlider.style.backgroundImage = images[currentIndex];
}

// Next Slide Function (increment)
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length; // Loop to the start if at the last slide
    updateBackground();
    resetInterval(); // Reset the interval on manual change
}

// Previous Slide Function (decrement)
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the end if at the first slide
    updateBackground();
    resetInterval(); // Reset the interval on manual change
}

// Function to start the automatic slider
function startSlider() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 4000); // Change slide every 4 seconds
}

// Function to reset the interval when a manual change occurs
function resetInterval() {
    clearInterval(slideInterval); // Clear the current interval
    startSlider(); // Restart the automatic slider
}

// Initial setup
updateBackground();
startSlider(); // Start the automatic slider initially
