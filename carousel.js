<script>
  document.addEventListener('DOMContentLoaded', () => {
    const upButton = document.querySelector('.carousel-button.up');
    const downButton = document.querySelector('.carousel-button.down');
    const skillsicon = document.querySelector('.skillsicon');
    const items = document.querySelectorAll('.skillsicon a');
    let currentIndex = 0;

    function updateCarousel() {
      items.forEach((item, index) => {
        if (index === currentIndex) {
          item.style.transform = 'translateY(0)';
        } else if (index < currentIndex) {
          item.style.transform = `translateY(-100%)`;
        } else {
          item.style.transform = `translateY(100%)`;
        }
      });
    }

    upButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    downButton.addEventListener('click', () => {
      if (currentIndex < items.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });

    updateCarousel();
  });
</script>
