const card = document.querySelector(".card");
const ratings = card.querySelector(".card__ratings");
const submit = card.querySelector(".card__submit");
const favourite = card.querySelector(".card__favourite");

let ratingValue = 0;

ratings.addEventListener("click", e => {
  const target = e.target;
  const value = e.target.dataset.value;
  if (!value) return;
  for (const child of e.currentTarget.children) {
    child.classList.remove("active");
  }
  target.classList.add("active");
  ratingValue = value;
});
submit.addEventListener("click", e => {
  if (!ratingValue) return;
  const selection = card.querySelector(".card__selection");
  const title = card.querySelector(".card__title");
  const description = card.querySelector(".card__description");
  card.classList.add("card--submitted");
  selection.textContent = `You selected ${ratingValue} out of 5`;
  title.textContent = "Thank you!";
  description.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
});
favourite.addEventListener("click", e => {
  e.currentTarget.classList.toggle("selected");
});