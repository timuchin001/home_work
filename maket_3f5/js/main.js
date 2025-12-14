(function (){

   // Бургер
   document.addEventListener('click', burgerInit);

   function burgerInit(e) {
      const burgerIcon = e.target.closest('.burger__icon');
      const navLink = e.target.closest('.nav__link');

      if (!burgerIcon && !navLink) return;

      if (document.documentElement.clientWidth > 900) return;

      if (burgerIcon) {
         e.preventDefault();
         document.body.classList.toggle('body--opened-menu');
         return;
      }

      if (navLink) {
         document.body.classList.remove('body--opened-menu');
      }
   }
   
   // Модалка 
   const modal = document.querySelector('.modal')
   const modalButton = document.querySelector('.about__img-button')
   
   modalButton.addEventListener('click',openModal)
   modal.addEventListener('click',closeModal)

   function openModal(e) {
      e.preventDefault()
      document.body.classList.toggle('body--opened-modal')
   }

   function closeModal(e) {
      e.preventDefault()

      const target = e.target

      if(target.closest('.modal__cancel') || target.classList.contains('modal')){
         document.body.classList.remove('body--opened-modal')
      }

   }

   // Табы 

   const tabControls = document.querySelector ('.tab__controls')

   tabControls.addEventListener('click', toggleTab)

   function toggleTab(e){

      const tabControl = e.target.closest('.tab__controls-link')

      if (!tabControl) return
      e.preventDefault()
      if (tabControl.classList.contains('tab__controls-link--active')) return

      const tabContentId = tabControl.getAttribute('href')
      const tabContent = document.querySelector(tabContentId)
      const activeControl = document.querySelector('.tab__controls-link--active')
      const activeContent = document.querySelector('.tab-content--show')

      if (activeControl){
         activeControl.classList.remove('tab__controls-link--active')
      }
      if (activeContent){
         activeContent.classList.remove('tab-content--show')
      }
      
      tabControl.classList.add('tab__controls-link--active')
      tabContent.classList.add('tab-content--show')
   }

// Аккордионы

const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {

   el.addEventListener('click', (e) =>  {

      const accordionList = e.currentTarget;
      const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
      const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');
      
      const accordionControl = e.target.closest('.accordion-list__controle');
      if (!accordionControl) return;

      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      if (accordionOpenedItem && accordionOpenedItem !== accordionItem) {
         accordionOpenedItem.classList.remove('accordion-list__item--opened');
         accordionOpenedContent.style.maxHeight = null;
      }

         accordionItem.classList.toggle('accordion-list__item--opened');

         if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
         } else {
            accordionContent.style.maxHeight = null;
         }
      });
   });

  // Слайдер-галерея

      const swiper = new Swiper('.gallery__slider', {

         spaceBetween: 15,
         slidesPerView: 1.7,

         pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
         },

         navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
         },

            breakpoints: {
      601: {
         spaceBetween: 32,
         slidesPerView: 3,
      },
      801: {
         spaceBetween: 32,
      },
      1101: {
         slidesPerView: 4,
      }
   }
      });

      //Слайдер-отзывы 
      new Swiper('.tesstimonials__slider', {

         spaceBetween: 0,
         slidesPerView: 1,
         centeredSlides: true,

         navigation: {
            nextEl: '.tesstimonials__next',
            prevEl: '.tesstimonials__prev',
         },
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
      },

            breakpoints: {
      901: {
         slidesPerView: 1.5,
      },
      1201: {
         slidesPerView: 2.1,
      }
   }
      });

})();
/* ======================================== */



// const openBtn = document.querySelector('.about__img-button');
// const modal = document.querySelector('.modal');
// const body = document.body;
// const closeBtn = document.querySelector('.modal__cancel');

// const openModal = () => {
//    modal.classList.add('modal--opened');       
//    body.classList.add('body--opened-modal');   
// };

// const closeModal = () => {
//    modal.classList.remove('modal--opened');   
//    body.classList.remove('body--opened-modal'); 
// }

// openBtn.addEventListener('click', (e) => {
//    e.preventDefault(); 
//    openModal();
// });

// closeBtn.addEventListener('click', (e) => {
//    e.preventDefault();
//    closeModal();
// });


// modal.addEventListener('click', (event) => {
//    if (event.target.classList.contains('modal')) {
//       closeModal();
//    }
// });


// document.addEventListener('keydown', (event) => {
//    if (event.code === 'Escape' && modal.classList.contains('modal--opened')) {
//       closeModal();
//    }
// });