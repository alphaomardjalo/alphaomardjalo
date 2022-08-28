document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.steps').forEach(function(tabsBtn){
        tabsBtn.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)


            document.querySelectorAll('.consultation-content').forEach(function(tabsBtn){
                tabsBtn.classList.remove('tabs-item--active')             
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');             
        }) 
        
    })
})



///////////////////////////////////////////////////////////////////////////////////////////////////


const ques_content = document.querySelectorAll('.question')

ques_content.forEach((question) => {
    question.addEventListener('click',  () => {
      question.classList.toggle('active')
    })
})


////////////////////////////////////////////////////////////////////////////////////////////////

// const trigger_search = document.querySelector('.trigger__search')
// const input = document.querySelector('.input')

// trigger_search.addEventListener('click', () =>{
//     if(!input.classList.contains('input-open')){
//         input.classList.add('input-open')
//         trigger_search.innerHTML= '<i class="fas fa-times"></i>'

//     }
//     else{
//         input.classList.remove('input-open')
//         trigger_search.innerHTML = '<i class="fas fa-search"></i>'
//     }
// })


let search = document.querySelector('.icon')

let clear = document.querySelector('.clear')

search.onclick = function(){
    document.querySelector('.wrapper').classList.toggle('active')
}

clear.onclick = function(){
    document.getElementById('search').value = '';
}


////////////////////////////////////////////////////////////////////////
let burger__logo = document.querySelector('.burger')

let mobile_menu = document.querySelector('.mobile-nav')

burger__logo.addEventListener('click', function(){
  burger__logo.classList.toggle('is-active')
  mobile_menu.classList.toggle('is-active')
})