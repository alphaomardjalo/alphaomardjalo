let burger__logo = document.querySelector('.burger')

let mobile_menu = document.querySelector('.mobile-nav')

burger__logo.addEventListener('click', function(){
  burger__logo.classList.toggle('is-active')
  mobile_menu.classList.toggle('is-active')
})