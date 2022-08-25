
/*--------switcher colors--------------*/
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
/*-----------hide-colors-----------*/
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/*-----------theme colors-----------*/
const alternarEstilo = document.querySelectorAll(".alternate-style")
function setActiveStyle(color){
    alternarEstilo.forEach((style)=>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled")
        }else{
            style.setAttribute("disabled","true")
        }
    })
}

/*-------------theme light and dark-------------------*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
        
    }
})


/*---------------Acordeon---------------*/

let accordionButtons = document.getElementsByClassName(
    "accordion-item__button"
  );
  
  for (let i = 0; i < accordionButtons.length; i++) {
    accordionButtons[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let accordionContent = this.nextElementSibling;
  
      if (accordionContent.style.maxHeight) {
        accordionContent.style.maxHeight = null;
      } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      }
    });
  }