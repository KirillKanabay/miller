const mobileMenu = document.getElementById("menu-mobile");
const closeButton = document.getElementById("close-menu-mobile-button");
const openButton = document.getElementById("open-menu-mobile-button");
const body = document.body;
const pageContainer = document.getElementById("page-container")

const closeMenu = (e)=>{
   e.preventDefault();
   mobileMenu.classList.add("hidden");
   pageContainer.classList.remove("hidden");
}

const openMenu = (e) =>{
   e.preventDefault();
   mobileMenu.classList.remove("hidden");
   pageContainer.classList.add("hidden");
}

closeButton.addEventListener("click", closeMenu);
openButton.addEventListener("click", openMenu);
