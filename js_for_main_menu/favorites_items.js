const iconFav = document.querySelectorAll('.icon_hearth');
const checkedHearth = document.querySelectorAll('#check_hearth');
const checkedTubs = document.querySelectorAll('#check_tubs');
let favoritesCalc = document.querySelector('.favorites_num');
let favoritesCalcTubs = document.querySelector('.favorites_num_tubs');
let numFavAll = document.querySelector('.fw_bold'); 
console.log(numFavAll)
const closeFavItem = document.querySelectorAll('.btn_close_fav');

console.log(closeFavItem);

heatrhNum ();
tubsNum ();
checkedHearth.forEach(e => {
   e.addEventListener('click', ()=> {
      
      if(e.checked) {
         
         favoritesCalc.textContent = parseInt(favoritesCalc.textContent) + 1;
        
         heatrhNum ();
      } else {
         favoritesCalc.textContent = parseInt(favoritesCalc.textContent) - 1;
        
         heatrhNum ();
      }
   })
})


checkedTubs.forEach(e => {
   e.addEventListener('click', ()=> {
      
      if(e.checked) {
         
         favoritesCalcTubs.textContent = parseInt(favoritesCalcTubs.textContent) + 1;
        
         tubsNum ()
         
      } else {
         favoritesCalcTubs.textContent = parseInt(favoritesCalcTubs.textContent) - 1;
         
         tubsNum ()
      }
   })
})

function heatrhNum () {
   
      if (parseInt(favoritesCalc.textContent) <= 0) {
         
         favoritesCalc.classList.add('new_closed')
      } else {
         favoritesCalc.classList.remove('new_closed')
      }
   }

   function tubsNum () {
   
      if (parseInt(favoritesCalcTubs.textContent) <= 0) {
   
         favoritesCalcTubs.classList.add('new_closed')
      } else {
         favoritesCalcTubs.classList.remove('new_closed')
      }
   }



   closeFavItem.forEach(e => {
      e.addEventListener('click', () => {
         
         e.closest('.auto_cart').remove();
         currentCalcFav ();
         resultNewfilt ();
      })
   })

   function currentCalcFav () {
      let autoCartNum = document.querySelectorAll('.auto_cart');
      console.log(autoCartNum.length);
      numFavAll.textContent = `${autoCartNum.length} авто`;
   }


   // ФИЛТЕР АВТО ФИЛЬТЕР АВТО 

   const filtNewAuto = document.getElementById('new_auto');
const filtWithMileage = document.getElementById('with_mileage');
const filtTaxi = document.getElementById('taxi_filt');
let allAutousFav = document.querySelectorAll('.auto_cart');
let allFilterFav = document.querySelectorAll('.favorites_filter_checkbox');
let taxiNum = document.querySelector('.num_taxi');
let mileageNum = document.querySelector('.num_mileage');
let newAutoNum = document.querySelector('.num_new_auto');
let govno = document.querySelectorAll('.a');
let resultNumFav = new Array();
let finalFiltLength = new Array();
resultNewfilt ();
allFilterFav.forEach(i => {
   i.addEventListener('click', () => {
     
      resultNewfilt ();
     
      resultNumFav = [];
      finalFiltLength = [];
      allAutousFav.forEach(e => {
         e.classList.add('new_closed');
         setTimeout(() =>{
            e.style.display = 'none';
         }, 300)
         
         if (e.classList[1] == i.id) {
            
            e.classList.remove('new_closed');
            resultNumFav.push(e)
            
           
            setTimeout(() =>{
               e.style.display = 'block';
            }, 300)
            
          
         }
         
      })
   })
})



function resultNewfilt () {
   
      let currentNewAuto = document.querySelectorAll('.new_auto');
      
      newAutoNum.textContent = currentNewAuto.length;
  
  
      let currentWithMileage = document.querySelectorAll('.with_mileage');
      
      mileageNum.textContent = currentWithMileage.length;
   
  
      let currentTaxiFilt = document.querySelectorAll('.taxi_filt');
      
      taxiNum.textContent = currentTaxiFilt.length - 1;
   
      
   }
