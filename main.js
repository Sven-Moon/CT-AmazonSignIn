document.querySelector(".need-help").addEventListener("click", handleClick);

function handleClick() {
  document.querySelector(".helps").classList.toggle("show");
  document
    .querySelectorAll(".triangle")
    .forEach((el) => el.classList.toggle("show"));
}
