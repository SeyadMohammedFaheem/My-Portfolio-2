// JavaScript to fill the progress bar as you scroll smoothly
let progressBar = document.getElementById('progress');

function updateProgressBar() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollableHeight) * 100;
    progressBar.style.width = scrolled + '%';
}

function scrollHandler() {
    requestAnimationFrame(updateProgressBar);
}

// Listen for the scroll event
window.addEventListener('scroll', scrollHandler);

// Initial update of the progress bar
updateProgressBar();
