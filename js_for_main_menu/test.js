let autoCart = document.querySelector('.auto_cart');
let addFav = document.querySelectorAll('.icon_hearth');
let test = document.querySelector('.test');

let myFavorites = document.querySelector('.my_favorites_filter_new_auto');
console.log(myFavorites);

addFav.forEach(e => {
   e.addEventListener('click', (a) => {
      let test2 = document.createElement('div');
      console.log(test2);
      test2.textContent = 'test';
      autoCart.append(test2);
   })
})