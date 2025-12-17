
let firstSlideContainer = 
document.getElementsByClassName("slide--content")[0];

let secondSlideContainer = 
document.getElementsByClassName("slide--content--one")[0];

let secondCanvas = 
document.getElementsByClassName("second--canvas")[0];

secondSlideContainer.setAttribute("style","display:none");
secondCanvas.setAttribute("style","display:none");

let thirdCanvas = 
document.getElementsByClassName("third--canvas")[0];

thirdCanvas.setAttribute("style","display:none");



let containerToggleOne = setTimeout(function(){
	firstSlideContainer.setAttribute("style","display:none");
	secondSlideContainer.setAttribute("style","display:block");
},2500);


let removeFirstSlide = setTimeout(function(){
	document.getElementsByClassName("first--slide")[0].setAttribute("style","display:none;")
	secondCanvas.setAttribute("style","display:block");
},6500);

let removeSecondCanvas = setTimeout(function(){
	secondCanvas.setAttribute("style","display:none");
	thirdCanvas.setAttribute("style","display:block")
},9800)


const finalScene = document.querySelector(".third--canvas");
const overlay = document.querySelector(".dua-overlay");

let overlayTriggered = false;

const observer = new MutationObserver(() => {
  const style = window.getComputedStyle(finalScene);

  // Jab final scene properly visible ho jaye
  if (
    !overlayTriggered &&
    style.display !== "none" &&
    style.opacity === "1"
  ) {
    overlayTriggered = true;

    // 🔥 5 SECOND WAIT yahin par
    setTimeout(() => {
      overlay.classList.add("show");
    }, 7000); // 5 seconds
  }
});

observer.observe(finalScene, {
  attributes: true,
  attributeFilter: ["style", "class"],
});
