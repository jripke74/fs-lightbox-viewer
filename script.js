const galleryItem = document.querySelector(".gallery-item");
const lightbox = document.querySelector(".lightbox");

galleryItem.addEventListener("click", function () {
  lightbox.style.display = "flex";
});
