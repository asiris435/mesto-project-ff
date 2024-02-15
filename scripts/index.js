const cardTemplate = document.querySelector("#card-template").content;
const placesList = document.querySelector(".places__list");

function createCard(name, link, deleteCallback) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__title").textContent = name;
  cardElement.querySelector(".card__image").setAttribute("src", link);
  cardElement.querySelector(".card__image").setAttribute("alt", name);
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", () => deleteCallback());
  return cardElement;
}

function deleteCard(cardElement) {
  cardElement.remove();
}

initialCards.forEach((item) => {
  const newCardElement = createCard(item.name, item.link, () =>
    deleteCard(newCardElement)
  );
  placesList.append(newCardElement);
});
