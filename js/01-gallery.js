import { galleryItems } from "./gallery-items.js";
// Change code below this line

const renderList = () =>
  galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div><a class="gallery__link" href="${original}">   <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    /></a></div>`
    )
    .join("");

const insertListItem = (string) => {
  const galleryItems = document.querySelector(".gallery");
  galleryItems.insertAdjacentHTML("beforeend", string);
};

insertListItem(renderList(galleryItems));

document.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const imgSelected = e.target.getAttribute("data-source");
  const template = basicLightbox.create(
    `<img src="${imgSelected}" width="800" height="600">`,

    {
      onShow: () => {
        document.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );

  template.show();

  function closeModal(e) {
    if (e.key === "Escape") {
      template.close();
    }
  }
});
