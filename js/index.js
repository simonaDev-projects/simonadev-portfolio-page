import { EmailForm } from "./components/form/EmailForm.js";
import { Gallery } from "./components/gallery/Gallery.js";
import { formData } from "./data/formData.js";
import { portfilioData } from "./data/portfolioData.js";

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
new Gallery('#portfolio_block', portfilioData);

//  projects gallery end 

//  contact start 
const containerDOM = document.querySelector('.contact');
const bgDOM = document.querySelector('.bg');

containerDOM.addEventListener('mousemove', (e) => {
   bgDOM.style.left = `${e.clientX}px`;
   bgDOM.style.top = `${e.clientY}px`;
})

new EmailForm('#contact-form', formData);

export function sendMail() {
   let params = {
      name: document.getElementById("username").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
   };
   const serviceID = "service_4se1351";
   const templateID = "template_ngwq6rr";

   emailjs.send(serviceID, templateID, params)
      .then(res => {
         document.getElementById("username").value = "";
         document.getElementById("email").value = "";
         document.getElementById("phone").value = "";
         document.getElementById("subject").value = "";
         document.getElementById("message").value = "";
         console.log(res);
         alert("Your message was sent successfully");
      })
      .catch((err) => console.log(err));
}

//  contact end

//  MAIN END

//  footer start

//  footer end 