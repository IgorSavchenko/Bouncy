//----------------------------------------------------
// init siema slider
import Siema from 'siema';

function onInitCallback() {
  console.log('Siema initialised bro :)');
}

function onChangeCallback() {
  console.log(`The index of current slide is: ${this.currentSlide}`);
}

const mySiema1 = new Siema({
  selector: '.team__siema',
  onInit: onInitCallback,
  onChange: onChangeCallback,
});

const mySiema2 = new Siema({
  selector: '.testimonials__siema',
  onInit: onInitCallback,
  onChange: onChangeCallback,
});
//----------------------------------------------------
// init Masonry with element when all images are Loaded
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
let imgLoad = imagesLoaded('.portfolio__list');
imgLoad.on( 'done', function(instance, image) {
  //creates Masonry object from .grid
  let grid = document.querySelector('.portfolio__list');
  let msnry = new Masonry( grid, {
    // options
    itemSelector: ".portfolio__item"
  });
});
//----------------------------------------------------
  var map;
  function initMap() {
    var beetroot = {lat: 49.569, lng: 34.583};
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 49.568, lng: 34.582},
      zoom: 15,
      center: beetroot
    });
    var marker = new google.maps.Marker({
          position: beetroot,
          map: map
        });
  }
  initMap();
