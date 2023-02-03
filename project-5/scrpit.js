const navbarEl = document.querySelector(".navbar");
const bottomCintainerEl = document.querySelector(".bottom-container");
console.log(navbarEl.offsetHeight);
console.log(bottomCintainerEl.offsetTop);

window.addEventListener("scroll", () =>{
    if(window.scrollY >bottomCintainerEl.offsetTop-
        navbarEl.offsetHeight -50){
            navbarEl.classList.add("active");
        }else{
            navbarEl.classList.remove("active");
        }
    
})
