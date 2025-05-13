const popupMessage = document.getElementById("popup-message");
const popupMessageClose = document.getElementById("popup-message-close");
const popupMessageKey = "popupMessageClosed";

function showPopupMessage() {
  if (!localStorage.getItem(popupMessageKey)) {
    popupMessage.classList.remove("hidden");
  }
}

function closePopupMessage() {
  popupMessage.classList.add("hidden");
  localStorage.setItem(popupMessageKey, "true");
}

window.addEventListener("load", () => {
  setTimeout(showPopupMessage, 5000);
});

popupMessageClose.addEventListener("click", closePopupMessage);
