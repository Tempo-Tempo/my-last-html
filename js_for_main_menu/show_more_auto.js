const btnShowMore = document.getElementById('show_more');
const btnCloseMore = document.getElementById('close_more');
const autousCart = document.querySelector('.autous_cart');
const bgBtnShow = document.querySelector('.w100');
const bgBtnClose = document.querySelector('.for_close_more')


btnShowMore.addEventListener('click',() => {
   bgBtnShow.classList.add('new_closed');
   autousCart.style.maxHeight = "2500px";
   autousCart.style.overflow = "visible";
   bgBtnClose.classList.remove('new_closed');
})


btnCloseMore.addEventListener('click', () => {
   bgBtnClose.classList.add('new_closed');
   autousCart.style.maxHeight = "1060px";
   autousCart.style.overflow = "hidden";
   bgBtnShow.classList.remove('new_closed');
})