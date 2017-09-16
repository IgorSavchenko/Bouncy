//----------------------------------------------------
// init siema slider
// import Siema from 'siema';
//
// function onInitCallback() {
//   console.log('Siema initialised bro :)');
// }
//
// function onChangeCallback() {
//   console.log(`The index of current slide is: ${this.currentSlide}`);
// }
//
// const mySiema = new Siema({
//   onInit: onInitCallback,
//   onChange: onChangeCallback,
// });
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
    // columnWidth: 25%
  });
});
