const homeBtn = document.getElementById("homeBtn")
homeBtn.addEventListener("click", () => {
  updateContentInView(OPERATIONS.homeIndx);
})