

$(function(){
let mobileSearchIcon = document.querySelector(".mobile_search");
let mobileSearchBody = document.querySelector("#search");

mobileSearchIcon.addEventListener('click', function(){

    mobileSearchBody.classList.toggle("search_active");

});
});