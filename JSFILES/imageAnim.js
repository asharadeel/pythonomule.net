document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.image-rollover-track');
    const container = document.querySelector('.image-rollover-container');
    const images = track.querySelectorAll('img');
    
    // Set the animation duration based on number of images
    const animationDuration = images.length * 3; // 3 seconds per image
    
    // Duplicate images for seamless looping if not already done in HTML
    if (images.length <= 3) { // Adjust this number based on your initial image count
        const firstHalf = Array.from(images).map(img => img.cloneNode(true));
        firstHalf.forEach(img => track.appendChild(img));
    }
    
    // Create keyframes dynamically
    const styleSheet = document.styleSheets[0];
    const keyframes = `
    @keyframes rollover {
        0% {
            transform: translateX(0);
        }
        90% {
            transform: translateX(calc(-50%));
        }
        100% {
            transform: translateX(0);
        }
    }
    `;
    
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    
    // Apply animation
    track.style.animation = `rollover ${animationDuration}s linear infinite`;
    
    // Optional: Pause/play on click
    container.addEventListener('click', function() {
        if (track.style.animationPlayState === 'paused') {
            track.style.animationPlayState = 'running';
        } else {
            track.style.animationPlayState = 'paused';
        }
    });
});