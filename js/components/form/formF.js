
const form = () => {
   // Susirenku reikiamus elementus is formos:
   const formDOM = document.getElementById('contact-form')
   const subjectDOM = document.getElementById('subject');
   const messageDOM = document.getElementById('message');
   const submitDOM = document.querySelector('form button');
   const errorText = document.querySelectorAll('.error-txt');
   const inputFields = document.querySelectorAll('input');

   formDOM.addEventListener('submit', (e) => {
      e.preventDefault();
      const userNameDOM = e.target.username.value // gaunama ivesties reiksme

      console.log(typeof userNameDOM);
      const emailDOM = e.target.email.value;
      const phoneDOM = Number(e.target.phone.value);


      // Inputu validacijos:
      // validacija suveikia tik viena karta, uzsidegus zaliam remeliui ir vel klaidingai ivedus duomenis - nepersijungia i raudona remeli ir neismeta klaidos pranesimo
      function isValidUsername(str) {
         if (str === '') {
            errorText[0].innerText = 'Laukelis negali buti tuscias';
            return errorText;
         } else if (typeof str !== 'string' || /\d/.test(str)) {
            //reikia atpazinti skaicius, nes dabar priima kaip string
            errorText[0].innerText = 'Ivestis turi buti tekstas';
            return errorText;
         } else if (str.length <= 2) {
            errorText[0].innerText = 'Per trumpas vardas';
            return errorText;
         } else {
            errorText[0].style.display = 'none';
            inputFields[0].classList.add('correctly');
            return str;
         }

      }

      function isValidEmail(str) {
         if (str === '') {
            errorText[1].innerText = 'Laukelis negali buti tuscias';
            return errorText;

         } else if (!str.includes('@')) {
            errorText[1].innerText = '@ privalomas';
            return errorText;

         } else if (str.length < 6) {
            errorText[1].innerText = 'Per trumpas email';
            return errorText;

         } else if (str.length >= 50) {
            errorText[1].innerText = 'Per ilgas email';
            return errorText;
         } else {
            errorText[1].style.display = 'none';
            inputFields[1].classList.add('correctly');
            return str;
         }
      }

      function isValidPhone(num) {

      }


      if (!isValidUsername(userNameDOM) || !isValidEmail(emailDOM)) {
         return false;
      }



   })
   formDOM.reset();
}

export { form };



