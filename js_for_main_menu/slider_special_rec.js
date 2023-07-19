const btnNextSpec = document.querySelector('.special_arrow_right');
const btnPrevSpec = document.querySelector('.special_arrow_left');
let allSpecialOffers = document.querySelectorAll('.special_offer');
console.log(allSpecialOffers)
const specialOffer1 =  document.getElementById('special_offer1');
const specialOffer2 =  document.getElementById('special_offer2');
const specialOffer3 =  document.getElementById('special_offer3');
const specialOffer4 =  document.getElementById('special_offer4');
const specialOffer5 =  document.getElementById('special_offer5');
const specialOffer6 =  document.getElementById('special_offer6');
const specialOffer7 =  document.getElementById('special_offer7');




const btnNextBank = document.getElementById('next_bank');
const btnPrevBank = document.getElementById('prev_bank');

let allBanks = document.querySelectorAll('.item_bank');

const bankSlide1 =  document.getElementById('bank1');
const bankSlide2 =  document.getElementById('bank2');
const bankSlide3 =  document.getElementById('bank3');
const bankSlide4 =  document.getElementById('bank4');
const bankSlide5 =  document.getElementById('bank5');
const bankSlide6 =  document.getElementById('bank6');
const bankSlide7 =  document.getElementById('bank7');


let specCounter = 0;

let bankCounter = 0;




// Слайдер на спецпредложения Слайдер на спецпредложения Слайдер на спецпредложения Слайдер на спецпредложения


btnNextSpec.addEventListener('click', () => {
   specCounter = specCounter + 1;
   sliderFinalSpec ();
})


btnPrevSpec.addEventListener('click', () => { 
   specCounter = specCounter - 1;
   sliderFinalSpec ();
})

function sliderFinalSpec () {
   if (specCounter == -1) {
      specCounter = specCounter + 5;
      
      allSpecialOffers.forEach (e => {
         e.style.transform = "translateX(-2195px)"
      });
   }

   else if (specCounter == 0) {
      allSpecialOffers.forEach (e => {
         e.style.transform = "translateX(0)"
      });
   }
   
   else if (specCounter == 1 ) {
      
      allSpecialOffers.forEach (e => {
         e.style.transform = "translateX(-550px)"
         
      });
      
     

   } else if (specCounter == 2) {
      allSpecialOffers.forEach (e => {
         e.style.transform = "translateX(-1100px)"
      });

      
   } else if (specCounter == 3) {

      allSpecialOffers.forEach (e => {
         e.style.transform = "translateX(-1650px)"
      });
      
   } else if (specCounter == 4) {

      allSpecialOffers.forEach (e => {
         e.style.transform = "translateX(-2195px)"
      });
      
      
   }  else if (specCounter == 5) {
      allSpecialOffers.forEach (e => {
         e.style.transform = "translateX(0px)"
      });
      specCounter = 0;
   }
 }

// Слайдер на Банки  Слайдер на Банки Слайдер на Банки Слайдер на Банки 

 btnNextBank.addEventListener('click', () => {
   bankCounter = bankCounter + 1;
   console.log(bankCounter)
   sliderFinalBank ();
})


btnPrevBank.addEventListener('click', () => { 
   bankCounter = bankCounter - 1;
   console.log(bankCounter)
   sliderFinalBank ();
})



function sliderFinalBank () {
   if (bankCounter == -1) {
      bankCounter = bankCounter + 5;
      
      allBanks.forEach (e => {
         e.style.transform = "translateX(-1680px)"
      });
   }

   else if (bankCounter == 0) {
      allBanks.forEach (e => {
         e.style.transform = "translateX(0)"
      });
   }
   
   else if (bankCounter == 1 ) {
      
      allBanks.forEach (e => {
         e.style.transform = "translateX(-420px)"
         
      });
      
     

   } else if (bankCounter == 2) {
      allBanks.forEach (e => {
         e.style.transform = "translateX(-840px)"
      });

      
   } else if (bankCounter == 3) {

      allBanks.forEach (e => {
         e.style.transform = "translateX(-1260px)"
      });
      
   } else if (bankCounter == 4) {

      allBanks.forEach (e => {
         e.style.transform = "translateX(-1680px)"
      });
      
      
   }  else if (bankCounter == 5) {
      allBanks.forEach (e => {
         e.style.transform = "translateX(0px)"
      });
      bankCounter = 0;
   }
 }



 // Слайдер НАМ ДОВЕРЯЮТ  // Слайдер НАМ ДОВЕРЯЮТ // Слайдер НАМ ДОВЕРЯЮТ // Слайдер НАМ ДОВЕРЯЮТ


 const btnNextFeedback = document.getElementById('next_feedback_btn');
const btnPrevFeedback = document.getElementById('prev_feedback_btn');

feedbackCounter = 0;


let allFeedbacks = document.querySelectorAll('.item_feedbacks');
console.log(allFeedbacks)

btnNextFeedback.addEventListener('click', () => {
   feedbackCounter = feedbackCounter + 1;
   sliderFeedbacks ();
})

btnPrevFeedback.addEventListener('click', () => {
   feedbackCounter = feedbackCounter - 1;
   sliderFeedbacks ();
})

   function sliderFeedbacks () {
         if (feedbackCounter == -1) {
            feedbackCounter = feedbackCounter + 5;
            
            allFeedbacks.forEach (e => {
               e.style.transform = "translateX(-1590px)"
            });
         }
      
         else if (feedbackCounter == 0) {
            allFeedbacks.forEach (e => {
               e.style.transform = "translateX(0)"
            });
         }
         
         else if (feedbackCounter == 1 ) {
            
            allFeedbacks.forEach (e => {
               e.style.transform = "translateX(-390px)"
               
            });
            
           
      
         } else if (feedbackCounter == 2) {
            allFeedbacks.forEach (e => {
               e.style.transform = "translateX(-790px)"
            });
      
            
         } else if (feedbackCounter == 3) {
      
            allFeedbacks.forEach (e => {
               e.style.transform = "translateX(-1180px)"
            });
            
         } else if (feedbackCounter == 4) {
      
            allFeedbacks.forEach (e => {
               e.style.transform = "translateX(-1590px)"
            });
            
            
         }  else if (feedbackCounter == 5) {
            allFeedbacks.forEach (e => {
               e.style.transform = "translateX(0px)"
            });
            feedbackCounter = 0;
         }
       }
   

       // Слайдер БЛОГ // Слайдер БЛОГ // Слайдер БЛОГ // Слайдер БЛОГ

       const btnNextTestItem = document.getElementById('next_test_item');
       const btnPrevTestItem = document.getElementById('prev_test_item');
       
       testItemCounter = 0;
       
       
       let allTestItems = document.querySelectorAll('.test_item');
       


       btnNextTestItem.addEventListener('click', () => {
         testItemCounter = testItemCounter + 1;
         sliderTestItem();
       })

       btnPrevTestItem.addEventListener('click', () => {
         testItemCounter = testItemCounter - 1;
         sliderTestItem();
       })



       function sliderTestItem() {
         if (testItemCounter == -1) {
            testItemCounter = testItemCounter + 3;
            
            allTestItems.forEach (e => {
               e.style.transform = "translateX(-830px)"
            });
         }
      
         else if (testItemCounter == 0) {
            allTestItems.forEach (e => {
               e.style.transform = "translateX(0)"
            });
         }
         
         else if (testItemCounter == 1 ) {
            
            allTestItems.forEach (e => {
               e.style.transform = "translateX(-415px)"
               
            });
            
           
      
         } else if (testItemCounter == 2) {
            allTestItems.forEach (e => {
               e.style.transform = "translateX(-830px)"
            });
            console.log(testItemCounter)
            
         } else if (testItemCounter == 3) {
            allTestItems.forEach (e => {
               e.style.transform = "translateX(0px)"
            });
            console.log(testItemCounter)
            testItemCounter = 0;
       }
       }