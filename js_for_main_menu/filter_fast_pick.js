const typeFilterKuzov = document.querySelectorAll('.type_kuzov_item'); 
const autoItem = document.querySelectorAll('.auto_item');
let autoItems = Array.from(autoItem);
let inputPriceAuto = document.querySelector('#price_range');
const kuzovType = document.querySelector('.type_kuzov');
const kuzovInfo = document.querySelector('.title_kuzov_full_info');
const BoxTypeFilter = document.querySelectorAll('.type_box_item');
const typeFilterBox = document.querySelectorAll('[data-f=""]');
const titlePick = document.querySelector('.title_pick');
let abc = {
   kuzov:"",
   box: ""
};
let numResult = 0;
const boxType = document.querySelector('.type_box');
const boxInfo = document.querySelector('.title_box_full_info');
const btnShowResult = document.querySelector('.show_result');


kuzovInfo.addEventListener('click', () => {
   kuzovInfo.classList.add('new_closed');
})

boxInfo.addEventListener('click', () => {
   boxInfo.classList.add('new_closed');
})


function Gogo() {
   btnShowResult.addEventListener('click', () => {
      btnShowResult.classList.add('scale_for_btn');
      setTimeout(()=>{
         btnShowResult.classList.remove('scale_for_btn');
      }, 200);
      checkAnswers ();
      autoItem.forEach(a => a.classList.remove('pick'));
    const kuzov = autoItems.filter(item => item.classList.contains(abc.kuzov));
    const box = autoItems.filter(b  => b.classList.contains(abc.box));
    let result = kuzov.concat(box);
    result.filter(r => {
      if(r.classList.contains(abc.kuzov) && r.classList.contains(abc.box) && parseInt(r.dataset.value) <= parseInt(inputPriceAuto.value)){
         r.classList.add('pick');
        
         numResult = document.querySelectorAll('.pick');
        
        btnShowResult.textContent = `Найдено совпадений: ${numResult.length}`; 
        
        return;
      } else  {
         numResult = document.querySelectorAll('.pick');    
         
          btnShowResult.textContent = `Найдено совпадений: ${parseInt(numResult.length)}`; 
          checkResult ();
      }
  
    })
})
}
Gogo();
typeFilterKuzov.forEach(elem => {
   elem.addEventListener('click', (e) => {
      if(e.composedPath().includes(elem)) {
        kuzovType.textContent = e.target.textContent;
        kuzovInfo.classList.add('new_closed');
        abc.kuzov = e.target.classList[0];
        
      } 
        
      

   })
   
})

BoxTypeFilter.forEach(elem => {
   elem.addEventListener('click', (e) => { 
      if(e.target) {   
        boxType.textContent = e.target.textContent;
         boxInfo.classList.add('new_closed');
         abc.box = e.target.classList[0];
         
      } 
   })
})


function checkResult () {
   if(parseInt(numResult.length) == 0) {
      btnShowResult.textContent = `Совпадений не найдено`; 
   }
}



function checkAnswers () {
   if (kuzovType.textContent == 'Тип кузова') {
      kuzovType.classList.add('check_answer');
      setTimeout(() => { 
         kuzovType.classList.remove('check_answer');
      },2000);
   } else if (boxType.textContent == 'Коробка') {
      boxType.classList.add('check_answer');
      setTimeout(() => { 
         boxType.classList.remove('check_answer');
      },2000);
   } else if (inputPriceAuto.value == 0) {
      titlePick.classList.add('check_answer');
      setTimeout(() => { 
         titlePick.classList.remove('check_answer');
      },2000);
   }
   
}


































