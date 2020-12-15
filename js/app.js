var DarkButton = document.querySelector("#dark-button"); 
var background = document.querySelector("body");  
var navText = document.querySelector("h1"); 
var bigCardBody = document.querySelectorAll('.a-card');  
var bigCardText = document.querySelectorAll('.card-big-text');
var smallCardBody = document.querySelectorAll('.b-card'); 
var smallCardText = document.querySelectorAll('.big-text');


DarkButton.addEventListener('click', function () {
    background.classList.toggle('dark-mode-bg');
    navText.classList.toggle('dark-mode-text');    
    
    bigCardBody.forEach(element => {
        element.classList.toggle('dark-mode-bg-2'); 
    
    }); 
    
    smallCardBody.forEach(element => {
        element.classList.toggle('dark-mode-bg-2');
    });
    
    bigCardText.forEach(element => {
        element.classList.toggle('dark-mode-text'); 
        
    }); 
    
    smallCardText.forEach(element => {
        element.classList.toggle('dark-mode-text'); 
        
    });
})