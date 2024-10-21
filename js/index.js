//  Header start 
// Toggle burger menu button
const burgerMenuDOM = document.getElementById('burger-menu');
const burgerIconDOM = document.querySelector('.burger-menu i');
const navMenuDOM = document.getElementById('nav-menu');

burgerMenuDOM.addEventListener('click', () => {
if (navMenuDOM.style.display === 'none') {
   navMenuDOM.style.display = 'flex';
   burgerIconDOM.classList.add('fa-x');
} else {
   navMenuDOM.style.display = 'none'
   burgerIconDOM.classList.remove('fa-x');
}
});

// Generated navigation manu:

   //  Header end 

   //  MAIN START 

   //  hero start 
   //  hero end 

   //  about start 
   //  about end 

   //  skills start 
   let menuToggleDOM = document.querySelector('.menuToggle');

menuToggleDOM.addEventListener('click', () => {
  menuToggleDOM.classList.toggle('active')
})

   //  skills end 

   //  projects gallery start 
   //  projects gallery end 

   //  contact start 
   //  contact end 

   //  MAIN END 

   //  footer start 
   //  footer end 