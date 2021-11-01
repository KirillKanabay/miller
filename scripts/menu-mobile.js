const mobileMenu = document.getElementById("menu-mobile");
const closeButton = document.getElementById("close-menu-mobile-button");
const openButton = document.getElementById("open-menu-mobile-button");
const body = document.body;

const closeMenu = (e)=>{
   e.preventDefault();
   mobileMenu.classList.add("hidden");
   body.classList.remove("overflow-hidden");
}

const openMenu = (e) =>{
   e.preventDefault();
   mobileMenu.classList.remove("hidden");
   body.classList.add("overflow-hidden");
}

closeButton.addEventListener("click", closeMenu);
openButton.addEventListener("click", openMenu);
