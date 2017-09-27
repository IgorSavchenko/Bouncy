//----------------------------------------------------
// menu navigation status change using jQuery
$('.header__menu-link').on('click', function() {
  $('.header__menu-link').removeClass('header__menu-link--active');
  $(this).addClass('header__menu-link--active');
});
//----------------------------------------------------
// init siema slider
import Siema from 'siema';
//default function
function onInitCallback() {
  console.log('Siema initialised bro :)');
}
//default function
function onChangeCallback() {
  console.log(`The index of current slide is: ${this.currentSlide}`);
}
//init slider1
const mySiema1 = new Siema({
  selector: '.team .slider',
  onInit: addNavigation,
  onChange: setActiveButton1,
});
//init slider2
const mySiema2 = new Siema({
  selector: '.testimonials .slider',
  onInit: addNavigation,
  onChange: setActiveButton2,
  duration: 500,
  loop: true,
});
// listen for keydown event
setInterval(() => mySiema2.next(), 4000);
// Add a function that generates pagination to Siema
function addNavigation() {
  let length = this.innerElements.length;
  for (let i = 0; i < length; i++) {
    const btn = document.createElement('button');
    btn.classList.add('slider__button');
    if (i == 0) btn.classList.add('slider__button--active');
    btn.addEventListener('click', () => this.goTo(i));
    this.selector.nextSibling.appendChild(btn);
  }
}
// Add a function that change buttons in slider1
function setActiveButton1(){
  document.querySelectorAll('.team .slider__button').forEach((b, i) => {
    if (i == (this.currentSlide || 0)){
      b.classList.add("slider__button--active");
    } else {
      b.classList.remove("slider__button--active");
    }
  });
}
// Add a function that change buttons in slider2
function setActiveButton2(){
  document.querySelectorAll('.testimonials .slider__button').forEach((b, i) => {
    if (i == (this.currentSlide || 0)){
      b.classList.add("slider__button--active");
    } else {
      b.classList.remove("slider__button--active");
    }
  });
}
//----------------------------------------------------
// init Masonry with element when all images are Loaded
// import Masonry from 'masonry-layout';
// import imagesLoaded from 'imagesloaded';
// let imgLoad = imagesLoaded('.portfolio__list');
// let grid = document.querySelector('.portfolio__list');
// imgLoad.on( 'progress', function(instance, image) {
//   //creates Masonry object from .grid
//   let msnry = new Masonry( grid, {
//     // options
//     itemSelector: ".portfolio__item",
//     columnWidth: '.grid-sizer',
//     transitionDuration: '0.3s',
//     stagger: 30
//   });
// });
//----------------------------------------------------
// using filters menu in portfolio section
import imagesLoaded from 'imagesloaded';
// import isotope from 'isotope-layout';
// import Masonry from 'masonry-layout';
$( function() {
  //Initialize Isotope with jQuery when all images are loaded
  let portfolioList = $( '.portfolio__list' );
  portfolioList.imagesLoaded( function() {
    portfolioList.isotope({
      itemSelector: '.portfolio__item',
      layoutMode: 'masonry'
    });
  });
  // .filters-link elements class change to .filters-link--active
  $( "[data-filter]" ).on( "click" , function(event) {
    event.preventDefault();
    $( "[data-filter]" ).removeClass( "filters-link--active" );
    console.log( this );
    $( this ).addClass( "filters-link--active" );
    //filter elements by data-filter attribute
    let selector = "*";
    if ( $( this ).data( "filter" ) !== "*") {
      selector = "[data-type='" + $( this ).data( "filter" ) + "']";
    }
    // isotope function use
    portfolioList.isotope({ filter: selector });
  });
});
//----------------------------------------------------
//init google map with promisses
import loadGoogleMapsAPI from 'load-google-maps-api';
// var loadGoogleMapsApi = require('load-google-maps-api');
// loadGoogleMapsAPI.key = 'AIzaSyCfBx8JSgTHL8wZVieZTM-KVkWnzE5Fc3I';
// console.log(loadGoogleMapsAPI.key);
// loadGoogleMapsAPI().then(function() {
//   var beetroot = {lat: 49.569, lng: 34.583};
//   var map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: 49.568, lng: 34.582},
//       zoom: 15,
//       center: beetroot
//     });
//     var customIcon = 'assets/img/marker__beetroot.png';
//     var marker = new google.maps.Marker({
//           position: beetroot,
//           map: map,
//           title: 'Beetroot',
//           animation: google.maps.Animation.DROP,
//           icon: customIcon
//         });
// }).catch((err) => {
//   console.error(err)
// });

  //code if don't use promisses------------------------
  var map;
  function initMap() {
    var beetroot = {lat: 49.569, lng: 34.583};
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 49.568, lng: 34.582},
      zoom: 15,
      center: beetroot
    });
    var customIcon = 'assets/img/marker__beetroot.png';
    var marker = new google.maps.Marker({
          position: beetroot,
          map: map,
          title: 'Beetroot',
          animation: google.maps.Animation.DROP,
          icon: customIcon
        });
  }
  initMap();
//----------------------------------------------------
// social links click event interception
$('.footer__social-link').on('click', function(event) {
  event.preventDefault();
});
//----------------------------------------------------
//smooth scroll effect
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
