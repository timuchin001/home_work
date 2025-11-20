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

})();