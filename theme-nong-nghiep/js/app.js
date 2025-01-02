// Header Mobile Icon
const openMenuBtn = document.getElementById("btnOpenMenu")
const closeMenuBtn = document.getElementById("btnCloseMenu")
const menuMobileElement = document.getElementById("mobileNavbar")

openMenuBtn.addEventListener('click',()=>{
    menuMobileElement.style.display = "flex"
    menuMobileElement.style.animation = "moveRightToLeft  1.5s ease-in-out forwards"
})

closeMenuBtn.addEventListener('click',()=>{
    menuMobileElement.style.visibility = "none"
    menuMobileElement.style.animation = "moveLeftToRight .3s ease-in-out forwards"
})
// Header Mobile Icon

function changeImage(event, src) {
    document.getElementById('mainImage').src = src;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    event.target.classList.add('active');
}