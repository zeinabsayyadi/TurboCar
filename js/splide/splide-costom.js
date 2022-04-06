let elms = document.getElementsByClassName('splide');

for (let i = 0; i < elms.length; i++) {
  new Splide(elms[i], {

    direction: 'rtl',
    pagination: false,
    pauseOnHover: true,
    perPage: 4,
    perMove: 1,
    gap: '1rem',
    speed: 800,

   
   
    autoScroll: false,
    // autoScroll: {
    //   speed: 0.5,
    // },



    breakpoints: {
      1400: {
        type: 'loop',
        perPage: 4,
        gap: '5rem',
      },

      1200: {
        type: 'loop',
        perPage: 3,
        gap: '1rem'
      },

      992: {
        autoScroll: false,
        perPage: 3,
        gap: '0'
      },

      768: {
        autoScroll: false,
        perPage: 2,
        gap: '0'
      },

      576: {
        autoScroll: false,
        arrows: false,
        perPage: 1,
        gap: '0'
      }


    }

  }).mount(window.splide.Extensions);
}