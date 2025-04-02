const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeButton = document.querySelector("#close");

function itemClick(event) {
  lightbox.style.display = "flex";
  lightboxImage.src = event.target.src.replace("-thumbnail", "");
  event.stopPropagation();
}

galleryItems.forEach((galleryItem) => {
  galleryItem.addEventListener("click", itemClick);
});

closeButton.addEventListener("click", (event) => {
  if (lightbox.style.display === "flex" && event.target !== lightboxImage) {
    lightbox.style.display = "none";
  }
});

lightbox.addEventListener("click", (event) => {
  if (lightbox.style.display === "flex" && event.target !== lightboxImage) {
    lightbox.style.display = "none";
  }
});
