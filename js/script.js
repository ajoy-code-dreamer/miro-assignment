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
// ===== navbar js =====
// all selector 
const navMenu = document.querySelector('.nav__menuWrapperMain')
const collapseClose = document.querySelector('.collapse__menuIcon i')
// all selector 

// menu hide show 

collapseClose.addEventListener('click',(e)=>{
  navMenu.classList.toggle('nav__active')
  collapseClose.classList.toggle('fa-xmark')
})
// ===== navbar js =====

// ==== nav and tab js =====
// ===== selector =====
  const tabLink = document.querySelectorAll('#workOne .work__workingCategory')
  const tabContent = document.querySelectorAll('#workOne .work__categoryContentItem')
  const tabLink2 = document.querySelectorAll('#workTwo .work__workingCategory')
  const tabContent2 = document.querySelectorAll('#workTwo .work__categoryContentItem')
  // ===== selector =====
  
  // === workOne section nab and tabs ===
  tabLink.forEach((link,index)=>{
    
    link.addEventListener('click',(e)=>{
      e.preventDefault()
      tabLink.forEach(item=>{
        item.classList.remove('active')
      })
      link.classList.add('active')
      tabContent.forEach(item=>{
        item.classList.remove('workOne__active')
      })
      tabContent[index].classList.add('workOne__active')
    })
  })
  // === workOne section nab and tabs ===
  // === workTwo section nab and tabs ===
  tabLink2.forEach((link,index)=>{
    
    link.addEventListener('click',(e)=>{
      e.preventDefault()
      tabLink2.forEach(item=>{
        item.classList.remove('active')
      })
      link.classList.add('active')
      tabContent2.forEach(item=>{
        item.classList.remove('workOne__active')
      })
      tabContent2[index].classList.add('workOne__active')
    })
  })
  // === workTwo section nab and tabs ===

// ==== nav and tab js =====

// ============= javascript operation ==============

 /* === >>>>> Design by Ajoy Saha <<<<< === */
