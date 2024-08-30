let slideGroup = [
    { className: "img", interval: 5000 },
    { className: "img1", interval: 6000 },
    { className: "img2", interval: 5000 }
];

slideGroup.forEach(function(group) {
    let slideIndex = 0;
    const slides = document.getElementsByClassName(group.className);

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, group.interval);
    }

    showSlides();
});