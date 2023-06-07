let index =0;
function beginslides(){
    let slides = document.querySelectorAll(".slider");
    for ( let i = 0; i< slides.length; i++){
        slides[i].classList.remove("active");
    }
    index += 1;
    if(index >= slides.length){
        index = 0;
    }
    slides[index].classList.add("active");
}

setInterval(() => {
    beginslides();
}, 2000); 
