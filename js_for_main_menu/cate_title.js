let katAuto = document.querySelectorAll('.kat_auto');
let katAutoInfo = document.querySelectorAll('.title_cate_full_info');




function mouseOver() {
   katAuto.forEach(i => {
      i.addEventListener('mouseover', ()=> {
         katAutoInfo.forEach(e => {
            if (e.id === i.id) {
               
               e.classList.remove('new_closed');
               e.classList.add('new_open');
            }
         })
      })
   })
}

function mouseOut() {
   katAuto.forEach(a => {
      a.addEventListener('mouseout', ()=> {

         katAutoInfo.forEach(e => {
            e.classList.remove('new_open');
            e.classList.add('new_closed');
         })
      })
   })
}


mouseOver();
mouseOut();
