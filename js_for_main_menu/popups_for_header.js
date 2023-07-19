const btnCallback = document.querySelector('.feat_back');
let popupCall = document.querySelector('.header_callback');
let insidePopUp = document.querySelector('.take_offers_header');
const closeBtn = document.querySelector('.btn_callback_header');
const alertOkey = document.querySelector('.alert_okey');
const alertError = document.querySelector('.error_red');
const inputName = document.querySelector('.you_name');
const inputNumber = document.querySelector('.you_number');

function onlyNumber () {
  inputNumber.addEventListener('input', function(e){
   inputNumber.value = inputNumber.value.replace(/[^\d.]/g, '');
  })
}

function openPopUp() {
   btnCallback.addEventListener('click', () => {
      popupCall.classList.add('new_open');
      });
   }

function closePopUp() {
   window.addEventListener('click', (e) =>{
      if(e.composedPath().includes(btnCallback) || e.composedPath().includes(insidePopUp)) {
        
      } else if (!e.composedPath().includes(insidePopUp)) {
        
         popupCall.classList.remove('new_open');
      } 
   })
   
}

function btnClosePopup () {
   closeBtn.addEventListener('click', () => {
     
      if (!inputName.value == "" && !inputNumber.value == "") {
         alertOkey.classList.remove('new_closed');
         setTimeout(() => {
            alertOkey.classList.add('new_closed');
         }, 3000);
      }
      else if (inputName.value == "" || inputNumber.value == "") {
         alertError.classList.remove('new_closed');
         setTimeout(() => {
            alertError.classList.add('new_closed');
         }, 3000);
      }
   })
}

onlyNumber ();
btnClosePopup ();
openPopUp();
closePopUp();