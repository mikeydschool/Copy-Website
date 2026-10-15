const images = [
    "https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10",
    "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"
];

let currentIdx = 0;

function updateSlide() {
    const imgElement = document.getElementById("carousel-img");
    imgElement.src = images[currentIdx];
}

function nextSlide() {
    currentIdx = (currentIdx + 1) % images.length;
    updateSlide();
}

function prevSlide() {
    currentIdx = (currentIdx - 1 + images.length) % images.length;
    updateSlide();
}

function openDoc(url) {
    window.open(url, "_blank");
}

function openAP(url) {
    window.location.href = url;
}
