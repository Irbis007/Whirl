document.addEventListener('DOMContentLoaded', () =>{
    const menu = document.querySelector('.header-nav')
    const hamburger = document.querySelector('.menu-toggle')
    const paginationTop = document.querySelectorAll('.pagination-top')
    const paginationBody = document.querySelectorAll('.pagination-body')
    const paginationArrow = document.querySelectorAll('.pagination-arrow')


    hamburger.addEventListener('click', () =>{
        menu.classList.toggle('menu-active')
        hamburger.classList.toggle('hamburger-active')
    })


    paginationTop.forEach((item, i) => {
        item.addEventListener('click', ()=>{
            paginationBody[i].classList.toggle('pagination-body-active');
            paginationArrow[i].classList.toggle('pagination-arrow-active')
        })
    })
})