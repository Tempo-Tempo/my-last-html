
let marksFullInfo = document.querySelector('.marks_vec');
let marksVecType = document.querySelector('.marks_vec_type');
let modelVecType = document.querySelector('.model_vec');
let equipVecType = document.querySelector('.equip_vec');
let modelFullInfo = document.querySelector('.model_vec_info');
let equipFullInfo = document.querySelector('.equip_vec_info');
let equipOpenBtn = document.querySelector('.equip_vec_type');
let modelOpenBtn = document.querySelector('.model_vec_type');
let marksOpenBtn = document.querySelector('.marks_open_type');
const inputLoh = document.getElementById('vec_mark_input');
const typeMark = document.querySelectorAll('.type_mark_item');
const typeModel = document.querySelectorAll('.type_model_item');
const typeEquip = document.querySelectorAll('.type_equip_item');
const errorMark = document.querySelector('.alert_mark_error');
const inputPrice = document.getElementById('price_range_offer');
const inputMonth = document.getElementById('month_range');
const inputResult = document.getElementById('result_range');
const firstSum = document.querySelector('.first_contribution_sum');
const remainsSum = document.querySelector('.first_contribution_remains');
const numPrice = document.querySelector('.min_max_credit');
const numMonth = document.querySelector('.min_max_month');
const alertOkeyCredit = document.querySelector('.alert_okey_credit');
const alertErrorCredit = document.querySelector('.alert_error_credit');
const vzonsInput = document.getElementById('input_vznos');
const errorVzons = document.querySelector('.vzons_error');
const youNumber = document.getElementById('you_number_offer');
const youName = document.getElementById('you_name_offer');
const btnAccept = document.getElementById('btn_accept_name_number');
const finalInput = document.getElementById('result_range_credit');
const priceError = document.querySelector('.take_price');
let resultCalc;

let storeageTypes = new Array();


equipOpenBtn.addEventListener('click', () => {
  
   if (equipFullInfo.classList.contains('new_closed')) {
    
    equipFullInfo.classList.remove('new_closed');
    
   }  else {
      equipFullInfo.classList.add('new_closed');
   }
  })



modelOpenBtn.addEventListener('click', () => {
   
   if (modelFullInfo.classList.contains('new_closed')) {
    
    modelFullInfo.classList.remove('new_closed');
    
   }  else {
      modelFullInfo.classList.add('new_closed');
   }
  })



   marksOpenBtn.addEventListener('click', () => {
      
      if (marksFullInfo.classList.contains('new_closed')) {
       
       marksFullInfo.classList.remove('new_closed');
      
      }  else {
         marksFullInfo.classList.add('new_closed');
      }
     })


     function pickTypes () {
      typeMark.forEach(e => {
         e.addEventListener('click', () => {
            storeageTypes = [];
            modelVecType.textContent = 'Модель';
            equipVecType.textContent = 'Комплектация';
           storeageTypes.push(e.classList[0]);
            marksVecType.textContent = e.textContent;
            console.log(storeageTypes)
            typeModel.forEach(i => {
               if (i.classList[0] == e.classList[0]) {
                  i.classList.remove('dp0')
                  console.log(i)
               } else {
                  i.classList.add('dp0')
               }
            })
         })

      })

      typeModel.forEach (e => {
         e.addEventListener('click', () => {
            
            console.log(storeageTypes.length)
            if(storeageTypes.length == 0) {
               console.log(marksVecType.textContent);
               errorMark.classList.remove('new_closed');
               setTimeout(() => {
                  errorMark.classList.add('new_closed');
               }, 3000)
            } else {
               storeageTypes.push(e.classList[1]);
               modelVecType.textContent = e.textContent;
               console.log(storeageTypes);
            }
            
         })
      })

      typeEquip.forEach(e => {
         e.addEventListener('click', () => {
            if(storeageTypes.length == 0) {
               
               errorMark.classList.remove('new_closed');
               setTimeout(() => {
                  errorMark.classList.add('new_closed');
               }, 3000)
            } else {
               storeageTypes.push(e.classList[0]);
               equipVecType.textContent = e.textContent;
               console.log(storeageTypes);
            }
         })
      })

     }

     pickTypes ();


     inputPrice.addEventListener('input', () => {
      
      numPrice.textContent = ru.format(inputPrice.value);
      rangePriceBg();
     })

     inputMonth.addEventListener('input', () => {
      console.log(inputMonth.value)
      numMonth.textContent = `${inputMonth.value} мес.`;
      rangeMonthBg();
     })
     
     vzonsInput.addEventListener('input', () => {
      vzonsInput.value = vzonsInput.value.replace(/[^\d.]/g, '');
      console.log(vzonsInput.value)
      
      firstSum.textContent = ru.format(vzonsInput.value);
      resultCalc = parseInt(inputPrice.value) - parseInt(vzonsInput.value); 
  
      remainsSum.textContent = ru.format(resultCalc);
     
         
      if (remainsSum.textContent == 'не число ₽') {
         remainsSum.textContent = ru.format(0);
      } else if (parseInt(inputPrice.value) == 0) {
         priceError.classList.remove('new_closed'); 
         setTimeout(() => {
            priceError.classList.add('new_closed');
         }, 3000)
      firstSum.textContent = '0,00 ₽';
      remainsSum.textContent = '0,00 ₽';
      } else if (vzonsInput.value > parseInt(inputPrice.value/2)) {
         errorVzons.classList.remove('new_closed');
         vzonsInput.value = vzonsInput.value.slice(0, -1);  
         setTimeout(() => {
            errorVzons.classList.add('new_closed');
         }, 3000)
        
      }
      finalInputBg ()
      console.log(parseInt(inputPrice.value) == 0)
     })
     

     function checkResult () {
      if (remainsSum.textContent = 'не число ₽')
      console.log('posegl naxuy')
     }
   

     function rangePriceBg() {
      let val = parseInt(inputPrice.value) * 100 / 3000000;
      inputPrice.style.background = `-webkit-linear-gradient(left, #CA0100 0%, #CA0100 ${val}%, #E1E1E1 ${val}%, #E1E1E1 100%)`;
 
      
   }
   function rangeMonthBg() {
      let val = parseInt(inputMonth.value) * 100 / 86;
      console.log(val)
      inputMonth.style.background = `-webkit-linear-gradient(left, #CA0100 0%, #CA0100 ${val}%, #E1E1E1 ${val}%, #E1E1E1 100%)`;
 
      
   }
   
   btnAccept.addEventListener('click', () => {
      acceptOffer ();
   })

      function acceptOffer () {
        
         if (youName.value != "" && youNumber.value != "") {
            alertOkeyCredit.classList.remove('new_closed');
            setTimeout(() => {
               alertOkeyCredit.classList.add('new_closed');
            }, 3000)
            console.log('rdy')
         } else {
            alertErrorCredit.classList.remove('new_closed');
            setTimeout(() => {
               alertErrorCredit.classList.add('new_closed');
            }, 3000)
         }
      }


      function finalInputBg () {
         console.log(parseInt(inputPrice.value))
         finalInput.value = vzonsInput.value;
         let val = parseInt(finalInput.value) * 100 / parseInt(inputPrice.value);
         finalInput.style.background = `-webkit-linear-gradient(left, #CA0100 0%, #CA0100 ${val}%, #E1E1E1 ${val}%, #E1E1E1 100%)`;
         console.log(finalInput.value)
         if (finalInput.value == 1500000) {
            console.log('govno')
            finalInput.style.background = `-webkit-linear-gradient(left, #CA0100 0%, #CA0100 0%, #E1E1E1 0%, #E1E1E1 100%)`;
         }
      }