const infoCheckBox = document.getElementsByName('cardeals');
const innerInfoBox = document.querySelectorAll('.mgb50');
const btnViewList = document.querySelector('.list');
const listItems = document.querySelector('.list_items');

console.log(innerInfoBox)
console.log(infoCheckBox);
infoCheckBox.forEach(e => {
   e.addEventListener('click', () => {
      
      if(e.checked) {
         console.log(e.classList[0]);
         innerInfoBox.forEach(i => i.classList.add('new_closed'));
        let openItem = document.getElementById(e.classList[0]);
        console.log(openItem);
        
        openItem.classList.remove('new_closed');
        
      }
   })
})

window.addEventListener('click', (e) => {
   if (e.composedPath().includes(btnViewList)) {
      
      listItems.style.left = "0px";
   } else if(!e.composedPath().includes(btnViewList)) {
      
      listItems.style.left = "-300px";
   }
   
   
})


  