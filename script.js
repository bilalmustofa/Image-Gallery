const filters = document.querySelectorAll("[data-filter]");
const images = document.querySelectorAll('.image');

filters.forEach(filter => {
    filter.addEventListener('click', () => {
        const selected = filter.dataset.filter;

        images.forEach(image => {
             if (selected === "all" || image.dataset.category === selected) {
                image.style.display = "block";
             } else {
                image.style.display = "none";
            }
        })
    })
})