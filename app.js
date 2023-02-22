const shareButton = document.querySelector(".icon-share");
const speechBubble = document.querySelector(".box");

shareButton.addEventListener("click", () => {
  shareButton.classList.toggle("change");
  speechBubble.style.visibility = "visible";
  speechBubble.classList.toggle("fade");
});
