const CONTENT = document.querySelectorAll('.content')
let actualIndxContentInView = 0;

const OPERATIONS = {
  addIndx: "ADD",
  substractIndx: "SUBSTRACT",
  homeIndx: "HOME"
}

const showActualContentSelected = () => {
  // console.log("actualContent:", typeof CONTENT[actualIndxContentInView], CONTENT[actualIndxContentInView]);
  CONTENT.forEach( el => {
    el.classList.remove("contentAvailable")
  })
  CONTENT[actualIndxContentInView].classList.add("contentAvailable")
}

const navigationBtnsController = () => {
  let indx = actualIndxContentInView

  if(indx === 0) {
    prevBtn.classList.add("btnUnavailable")
  } else if (prevBtn.classList.contains("btnUnavailable")) {
    prevBtn.classList.remove("btnUnavailable")
  }

  if (indx === CONTENT.length - 1) {
    nextBtn.classList.add("btnUnavailable");
    homeBtn.classList.add("btnAvailable");
  } else {
    nextBtn.classList.remove("btnUnavailable");
    homeBtn.classList.remove("btnAvailable");
  }
  
}

const updateActualIndx = ( operation ) => {
  switch (operation) {
    case OPERATIONS.addIndx:
      actualIndxContentInView++;
      break;
    case OPERATIONS.substractIndx:
      actualIndxContentInView--;
      break;
    case OPERATIONS.homeIndx:
      actualIndxContentInView = 0;
      break;
  }
  showActualContentSelected()
}

const updateContentInView = ( operation ) => {
  updateActualIndx(operation);
  navigationBtnsController();
  //  console.log("actualIndxContentInView:", actualIndxContentInView);
  upBtn.classList.remove("upBtnAvailable");
  window.scrollTo(0, 0);
}
updateContentInView(OPERATIONS.homeIndx);