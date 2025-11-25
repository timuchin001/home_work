(function (){

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