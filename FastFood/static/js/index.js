document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slideshow img');
    let currentIndex = 0;

    function updateImage() {
        images.forEach((img, index) => {
            img.classList.remove('active');
            if (index === currentIndex) {
                img.classList.add('active');
            }
        });
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }, 3000); // Switch images every 3 seconds
});
