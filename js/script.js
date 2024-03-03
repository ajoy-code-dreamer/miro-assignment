// ============= jQuery operation ==============
$(function(){
  
  
  $('.users__slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
    
})

// ============= jQuery operation ==============

// ============= javascript operation ==============
// all selector 
const navMenu = document.querySelector('.nav__menuWrapperMain')
const collapseClose = document.querySelector('.close__icon i')

const menuIcon = document.querySelector('.collapse__menuIcon i')
// all selector 

menuIcon.addEventListener('click',()=>{
  navMenu.classList.toggle('menu__active')
  menuIcon.classList.toggle('fa-xmark')
})
collapseClose.addEventListener('click',()=>{
  navMenu.classList.toggle('menu__active')
  menuIcon.classList.toggle('fa-xmark')
})


// ============= javascript operation ==============