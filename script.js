document.addEventListener("DOMContentLoaded", () => {
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");
  
    hamMenu.addEventListener("click", () => {
      hamMenu.classList.toggle("active");
      offScreenMenu.classList.toggle("active");
    });
  });



/*switching imgs on home page */

let currentIndex = 0;
const images = document.querySelectorAll('.content-image');
const texts = document.querySelectorAll('.text-item');
let intervalId;

// Function to switch between text and images
function switchContent() {
    // Remove active class and hide all images
    images.forEach(img => img.style.display = 'none');
    texts.forEach(text => text.classList.remove('active-text'));

    // Show the current image and highlight the current text
    images[currentIndex].style.display = 'block';
    texts[currentIndex].classList.add('active-text');

    // Move to the next index
    currentIndex = (currentIndex + 1) % images.length;
}

// Start the interval to change content every 3 seconds
function startInterval() {
    intervalId = setInterval(switchContent, 4000);
}

// Stop the interval when hovering
function stopInterval() {
    clearInterval(intervalId);
}

// Run the switchContent function on page load
startInterval();

// Add hover event listeners to the text items
texts.forEach(text => {
    text.addEventListener('mouseenter', stopInterval);  // Stop cycling on hover
    text.addEventListener('mouseleave', startInterval); // Resume cycling when hover ends
});


/*car key model animation */

const scrollers =  document.querySelectorAll(".scroller");

if (!window.matchMedia("prefers-reduced-animation: reduce").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller-inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicaterItem = item.cloneNode(true);
            duplicaterItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicaterItem)
        })
    })
}



/*testimonial swiper */


new Swiper('.card-wrapper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },



  });



