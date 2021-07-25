$('.owl-carousel').owlCarousel({
    loop:false,
    margin:40,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


function changeinfo() {
    console.log(this);
}

