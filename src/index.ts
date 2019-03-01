let dropdown;
let options;
let preview;
let previewText;
let icon;
let result;

window.addEventListener("load", function(event) {
  dropdown = document.querySelector(".dropdown");
  options = document.querySelector(".dropdown-options");
  preview = document.querySelector(".dropdown-preview");
  previewText = preview.querySelector(".dropdown-preview__text");
  icon = preview.querySelector("i");
  result = document.querySelector(".dropdown_result");
});

document.querySelector(".dropdown-preview").addEventListener("click", e => {
  toggleDropdown();
  e.stopPropagation();
});

document.querySelector(".dropdown-options").addEventListener("click", e => {
  handleOptionSelection(e);
  e.stopPropagation();
});

function handleOptionSelection(e) {
  const selectedOption = e.target.textContent;

  updateResult(selectedOption);
  updatePreview(selectedOption);
  toggleDropdown();
}

function toggleIcon() {
  icon.classList.toggle("rotate");
}

function toggleDropdown() {
  options.classList.toggle("is-hidden");
  toggleIcon();
}

function updateResult(value) {
  result.textContent = value;
}

function updatePreview(value) {
  previewText.textContent = value;
}
