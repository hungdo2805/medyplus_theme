//-------------------------------------- RENDER COUNTDOWN---------------------------------------
const bannerCountDown =  document.querySelectorAll('.banner-countdown');

bannerCountDown.forEach(element => {
  renderCountDown(element)
});

function renderCountDown(element){

  // console.log(element.innerHTML)

  var countDownDate = new Date(element.innerHTML).getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
     
  element.innerHTML = `
    <div class="banner-countdown-item">
      <div class="banner-countdown-count">${days}</div>
      <div class="banner-countdown-time">days</div>
    </div>
    <div class="banner-countdown-item">
      <div class="banner-countdown-count">${hours}</div>
      <div class="banner-countdown-time">hours</div>
    </div>
    <div class="banner-countdown-item">
      <div class="banner-countdown-count">${minutes}</div>
      <div class="banner-countdown-time">mins</div>
    </div>
    <div class="banner-countdown-item">
      <div class="banner-countdown-count">${seconds}</div>
      <div class="banner-countdown-time">secs</div>
    </div>
  `
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      element.appendChild = "EXPIRED";
    }
  }, 1000);
}



// ------------------------------get year copyright--------------------------

document.getElementById("year").innerHTML = new Date().getFullYear();


//--------------------------------toogle menu mobile---------------------------------

const toogleMobile = document.getElementById('toogle-mobile');

const menuMobileWrapper =  document.querySelector('.menu-mobile-wrapper');

const mobileClose = document.querySelector('.mobile-close');

const overlay = document.querySelector('.overlay');

toogleMobile.onclick = function(){
  menuMobileWrapper.classList.toggle('open');
  overlay.classList.toggle('open');
}


overlay.onclick = function(){
  menuMobileWrapper.classList.toggle('open');
  overlay.classList.toggle('open');
}

mobileClose.onclick = function(){
  menuMobileWrapper.classList.toggle('open');
  overlay.classList.toggle('open');
}



//------------------------------------ dropdown category-------------------------------------------

const dropCategory = document.getElementById('drop-category');
const selectText = document.getElementById('select-text');
const dropOptions = document.getElementsByClassName('drop-category-option');
const dropCategoryList = document.getElementById('drop-category-list');
const arrowIcon = document.getElementById('drop-category-icon');

dropCategory.onclick = function(event){
  event.stopPropagation();

  dropCategoryList.classList.toggle('open-drop');
  arrowIcon.classList.toggle('rotate');
}

for( option of dropOptions)
{
    option.onclick = function(){
        
        selectText.innerHTML = this.textContent;
    }
}

//------------------------------------ dropdown category vertical-------------------------------------------

const categoryToogle = document.querySelector('.category-toogle');
const categoryDropdown = document.querySelector('.category-dropdown');


categoryToogle.addEventListener('click',function(event){

  event.stopPropagation();

  this.classList.toggle('open');
  categoryDropdown.classList.toggle('open');
})




document.body.addEventListener('click', function(event){


  dropCategoryList.classList.remove('open-drop');
  arrowIcon.classList.remove('rotate');


  categoryToogle.classList.remove('open');
  categoryDropdown.classList.remove('open');

}); 

//------------------------------------ JQUERY-------------------------------------------

// $(document).click(function () {
//   // $styledSelect.removeClass('active');
//   // $list.hide();
//   alert(1)
// });

$(document).ready(function(){
  $('.product-slick').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed:3000,
    arrows:false,
    // prevArrow:"<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
    // nextArrow:"<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>"
  });

  $('.previous-btn').click(function(){
    $('.product-slick').slick('slickPrev');
  })
  
  $('.next-btn').click(function(){
    $('.product-slick').slick('slickNext');
  })


  $('.brand-list').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });
});