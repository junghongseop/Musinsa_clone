const images = [
  "../img/post1.jpg",
  "../img/post2.jpg",
  "../img/post3.jpg",
  "../img/post4.jpg",
  "../img/post5.jpg",
];
let currentImageIndex = 0;
const postElement = document.getElementById("post");

// 이미지를 동적으로 추가
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

// 초기 이미지 설정
showImage(currentImageIndex);

// 10초마다 이미지 변경
setInterval(nextImage, 10000);
