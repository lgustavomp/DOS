

window.addEventListener('mousemove', mouseMove);
function mouseMove(e) {
    let divFinder = document.querySelector(".wrapper_main");
    let divRect = divFinder.getBoundingClientRect();
    let divHeight = divRect.height;

    let menuDivFinder = document.querySelector(".wrapper_menu");
    let menuDivRect = menuDivFinder.getBoundingClientRect();
    let menuDivHeight = menuDivRect.height;
    
    const rect = el.getBoundingClientRect();
    el.style.height = menuDivHeight + "px";
    
}

// $(document).ready(function() {
// $(".wrapper_menu").css('height', divHeight);
// })