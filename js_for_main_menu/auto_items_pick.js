let AutoItem = document.querySelectorAll('.auto_item');
let inputPriceRange = document.querySelector('#price_range');
const ru = new Intl.NumberFormat("ru", {style:"currency", currency: "rub"});
const kuzovTypeShow = document.querySelectorAll('.type_kuzov');
const boxTypeShow = document.querySelectorAll('.type_box');
const kuzovInfoShow = document.querySelector('.title_kuzov_full_info');
const boxInfoShow = document.querySelector('.title_box_full_info');
const boxPick = document.querySelector('.box_pick_checkbox');





AutoItem.forEach(e => {
   e.addEventListener('click', () => {
      if(e.classList.contains('pick')) {
         
         e.classList.remove('pick');
      } else {
         e.classList.add('pick');
      }
   })
})

function range() {
   let 
   val = parseInt(inputPriceRange.value) * 100 / 3000000;
   document.querySelector('#price_range').style.background = `-webkit-linear-gradient(left, #CA0100 0%, #CA0100 ${val}%, #E1E1E1 ${val}%, #E1E1E1 100%)`
   text = document.querySelector('.min_max').textContent = `0 - ${ru.format(inputPriceRange.value)}`;   
   
}

function kuzovShow() {
   kuzovTypeShow.forEach(e => {
      e.addEventListener('click', () => {
         if(kuzovInfoShow.classList.contains('new_closed')) {
            
            kuzovInfoShow.classList.remove('new_closed');
         } else {
            kuzovInfoShow.classList.add('new_closed');
         }
      })
   })
}


function boxShow() {
   boxTypeShow.forEach(e => {
      e.addEventListener('click', () => {
         if(!boxPick.checked) {
            boxInfoShow.classList.remove('new_closed');
         } else {
            boxInfoShow.classList.add('new_closed');
         }
      })
   })
}

boxShow();

kuzovShow();
