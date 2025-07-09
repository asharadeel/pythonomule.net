document.addEventListener('DOMContentLoaded', function() {
    // Get all clickable images
    const images = document.querySelectorAll('.clickable-image');
    const overlay = document.getElementById('fullscreenOverlay');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const closeBtn = document.getElementById('closeBtn');
    
    // Add click event to each image
    images.forEach(img => {
        img.addEventListener('click', function() {
            fullscreenImage.src = this.src;
            fullscreenImage.alt = this.alt;
            overlay.style.display = 'block';
        });
    });
    
    // Close the overlay
    closeBtn.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
    
    // Also close when clicking outside the image
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });
    
    // Close with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.style.display === 'block') {
            overlay.style.display = 'none';
        }
    });
});