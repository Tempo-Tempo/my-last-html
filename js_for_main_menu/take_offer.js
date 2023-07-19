const inputTakeOffer = document.querySelector('#offers_input');
const btnTakeOffer = document.querySelector('.offers_btn');

const alertOkey2 = document.querySelector('.alert_okey_offer');
const alertError2 = document.querySelector('.error_red_offer');

function onlyNumberOffer () {
   inputTakeOffer.addEventListener('input', function(e){
    inputTakeOffer.value = inputTakeOffer.value.replace(/[^\d.]/g, '');
   })
 }


 btnTakeOffer.addEventListener('click', () => {
      if (inputTakeOffer.value.length == 11) {
         
         alertOkey2.classList.remove('new_closed');
         setTimeout(() => {
            alertOkey2.classList.add('new_closed');
         }, 3000);
      } else {
         alertError2.classList.remove('new_closed');
         setTimeout(() => {
            alertError2.classList.add('new_closed');
         }, 3000);
      }
 })

 onlyNumberOffer ();