function scrollSmooth (target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;
  

function animation(currentTime) {
  if(startTime === null) 
  startTime = currentTime;
  timeElapsed = currentTime - startTime;
  

 
  var run = ease (timeElapsed, startPosition, distance, duration);
  window.scrollTo(0, run);
  if (timeElapsed < duration) requestAnimationFrame(animation);
}

function ease (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}

requestAnimationFrame(animation)
}


const navfastPickAuto = document.querySelector('.nav_categories');
const navAboutCompany = document.querySelector('.nav_company');
const navCarDeals = document.querySelector('.nav_car_deals');
const navReviews = document.querySelector('.nav_reviews');
const navContatcs = document.querySelector('.nav_contatcs');
const btnOnTop = document.querySelector('.vector_on_top');

navfastPickAuto.addEventListener('click', () => {
  scrollSmooth('.fast_pick', 1000)
  
})

navAboutCompany.addEventListener('click', () => {
  scrollSmooth('.about_company', 1000)
  
})


navReviews.addEventListener('click', () => {
  scrollSmooth('.reviews', 1000)
  
})

navCarDeals.addEventListener('click', () => {
  scrollSmooth('.info_cardeal', 1000)
  
})

navContatcs.addEventListener('click', () => {
  scrollSmooth('.footer', 1000)
  
})

btnOnTop.addEventListener('click', () => {
  scrollSmooth('.info', 1000)
  
})