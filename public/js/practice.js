let currentIndex = 0;

function moveSlide(step) {
    const slider = document.querySelector('.slider');
    const totalCards = document.querySelectorAll('.card').length;
    
    // Calculate the new index
    currentIndex += step;
    
    // Ensure index stays within bounds
    if (currentIndex < 0) {
        currentIndex = totalCards - 4; // If we're at the start, move to the end
    } else if (currentIndex > totalCards - 4) {
        currentIndex = 0; // If we're at the end, move to the start
    }

    // Move the slider to the correct position
    slider.style.transform = `translateX(-${currentIndex * (100 / 4)}%)`;
}
