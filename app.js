let navTab ={
  bikes:"Just go for it. Not everything needs to be planned.",
  PARTS:"Bikers live a happy life. It is evident because you never see a bike outside a psychiatrists office",
  MEN:"The next time your neighbors tell you that your bike is too loud, organize a bike rally at your house and invite him",
  WOMEN: "Girls who ride motorcycles are the best type of girls."
}





// querryselectors


//functions

function uploadInfo(tabName) {
  if (tabName === "bikes") {
    let mainBox = document.querySelector('.desc')
    mainBox.innerHTML = navTab.bikes


  }
  else if (tabName === "parts") {
    let mainBox = document.querySelector('.desc')
    mainBox.innerHTML = navTab.PARTS


  }
  else if (tabName === "men") {
    let mainBox = document.querySelector('.desc')
    mainBox.innerHTML = navTab.MEN


  }

  else if (tabName === "women") {
    let mainBox = document.querySelector('.desc')
    mainBox.innerHTML = navTab.WOMEN


  }

}





