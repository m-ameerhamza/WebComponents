const searchBox = document.getElementById("searchBox");
const input = document.getElementById("input");

searchBox.addEventListener("click", () => {
  searchBox.classList.add("active");
  input.focus();
});

document.addEventListener("click", (e) => {
  if (!searchBox.contains(e.target)) {
    searchBox.classList.remove("active");
    input.value = "";
  }
});
