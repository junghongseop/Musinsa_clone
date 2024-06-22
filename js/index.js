const images = [
  "../img/post1.jpg",
  "../img/post2.jpg",
  "../img/post3.jpg",
  "../img/post4.jpg",
  "../img/post5.jpg",
];
let currentImageIndex = 0;
const postElement = document.getElementById("post");

images.forEach((src, index) => {
  const img = document.createElement("img");
  img.src = src;
  img.className = "slide";
  img.style.opacity = index === 0 ? "1" : "0";
  postElement.appendChild(img);
});

function showImage(index) {
  const imgElements = postElement.getElementsByClassName("slide");
  for (let i = 0; i < imgElements.length; i++) {
    imgElements[i].style.opacity = i === index ? "1" : "0";
  }
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

showImage(currentImageIndex);

setInterval(nextImage, 10000);
