document.addEventListener("DOMContentLoaded", function() {
    const accordionTitles = document.querySelectorAll('.arttitle');

    accordionTitles.forEach(title => {
        title.addEventListener('click', function() {
            const accordionContent = this.nextElementSibling;
            const accordionIconPlus = this.querySelector('.accordion-icon-plus');
            const accordionIconMinus = this.querySelector('.accordion-icon-minus');

            accordionContent.classList.toggle('active');

            if (accordionContent.classList.contains('active')) {
                accordionIconPlus.style.display = 'none';
                accordionIconMinus.style.display = 'inline';
            } else {
                accordionIconPlus.style.display = 'inline';
                accordionIconMinus.style.display = 'none';
            }
        });
    });
});
