const btnNextRec = document.querySelector('.arrow_rec_right');
const btnPrevRec = document.querySelector('.arrow_rec_left');
let allRecCars = document.querySelectorAll('.family_cars');
const family1 =  document.getElementById('family1');
const family2 =  document.getElementById('family2');
const family3 =  document.getElementById('family3');
const family4 =  document.getElementById('family4');
const family5 =  document.getElementById('family5');
const family6 =  document.getElementById('family6');

let recCounter = 0;

btnNextRec.addEventListener('click', () => {
   recCounter = recCounter + 1;
   sliderFinal ();
})



btnPrevRec.addEventListener('click', () => { 
   recCounter = recCounter - 1;
   sliderFinal ();
})

function sliderFinal () {
   if (recCounter == -1) {
      recCounter = recCounter + 4;
      
      allRecCars.forEach (e => {
         e.style.transform = "translateX(-1650px)"
      });
   }

   else if (recCounter == 0) {
      allRecCars.forEach (e => {
         e.style.transform = "translateX(0)"
      });
   }
   
   else if (recCounter == 1 ) {
      
      allRecCars.forEach (e => {
         e.style.transform = "translateX(-550px)"
         
      });
      
     

   } else if (recCounter == 2) {
      allRecCars.forEach (e => {
         e.style.transform = "translateX(-1100px)"
      });

      
   } else if (recCounter == 3) {

      allRecCars.forEach (e => {
         e.style.transform = "translateX(-1650px)"
      });
      
   } else if (recCounter == 4) {

      allRecCars.forEach (e => {
         e.style.transform = "translateX(0)"
      });
      
      recCounter = 0;
   } 
 }

