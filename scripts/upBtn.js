const scrollToMaxValue = () => {
  const body = document.body;
  const html = document.documentElement;
  
  const documentHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  const windowHeight = window.innerHeight;

  return documentHeight - windowHeight;
};

const windowScrollToUp = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

const upBtn = document.getElementById("upBtn");
window.addEventListener("scroll", () => {
  const maxScroll = scrollToMaxValue();
  if( window.scrollY > 200 && window.scrollY > maxScroll - ((maxScroll*20) / 100) ) {
    upBtn.addEventListener("click", windowScrollToUp)
    upBtn.classList.add('upBtnAvailable')
  } else {
    upBtn.removeEventListener("click", windowScrollToUp)
    upBtn.classList.remove('upBtnAvailable')
  }
})
