document.addEventListener('DOMContentLoaded', () => {

   /* ---------- TAGS ---------- */
   const tags = document.querySelectorAll('.discovery__tag')

   if (tags.length) {
      tags.forEach(tag => {
         tag.addEventListener('click', () => {
            tags.forEach(t => t.classList.remove('discovery__tag--active'))
            tag.classList.add('discovery__tag--active')
         })
      })
   }

   /* ---------- NEWSLETTER ---------- */
   const form = document.querySelector('.newsletter__form')
   const input = document.querySelector('.newsletter__input')

   if (form && input) {
      form.addEventListener('submit', (e) => {
         e.preventDefault()

         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

         if (!emailPattern.test(input.value)) {
            alert('Введите корректный email')
            return
         }

         alert('Спасибо за подписку!')
         input.value = ''
      })
   }

   /* ---------- SLIDER ---------- */
   const track = document.querySelector('.slider__track')
   const slides = document.querySelectorAll('.slider__slide')
   const prevBtn = document.querySelector('.slider__btn--prev')
   const nextBtn = document.querySelector('.slider__btn--next')
   const progressBars = document.querySelectorAll('.progress-container1 > div')

   if (track && slides.length && prevBtn && nextBtn) {

      let index = 0
      const maxIndex = slides.length - 1

      function updateSlider() {
         track.style.transform = `translateX(-${index * 100}%)`

         if (progressBars.length) {
            progressBars.forEach(bar => bar.classList.remove('active'))
            if (progressBars[index]) {
               progressBars[index].classList.add('active')
            }
         }
      }

      nextBtn.addEventListener('click', () => {
         index = index === maxIndex ? 0 : index + 1
         updateSlider()
      })

      prevBtn.addEventListener('click', () => {
         index = index === 0 ? maxIndex : index - 1
         updateSlider()
      })

      updateSlider()
   }

})

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
