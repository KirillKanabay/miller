const mobileMenu = document.getElementById("menu-mobile");
const closeButton = document.getElementById("close-menu-mobile-button");
const openButton = document.getElementById("open-menu-mobile-button");

const closeMenu = (e)=>{
   e.preventDefault();
   mobileMenu.classList.add("hidden");
}

const openMenu = (e) =>{
   e.preventDefault();
   mobileMenu.classList.remove("hidden");
}

closeButton.addEventListener("click", closeMenu);
openButton.addEventListener("click", openMenu);
