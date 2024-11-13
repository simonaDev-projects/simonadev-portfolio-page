import { sendMail } from "../../index.js";
import { IsValid } from "../isValid/IsValid.js";


class EmailForm {
   constructor(selector, data) {
      this.selector = selector;
      this.data = data;

      this.FORM = null;
      this.init();
   }

   init() {
      if (!this.isValidSelector() || !this.isValidData()) {
         return false;
      }
      this.render();
      this.addEventListeners();
   }

   isValidSelector() {
      if (!IsValid.nonEmptyString(this.selector)) {
         return false;
      }
      this.FORM = document.querySelector(this.selector);
      return this.FORM === null ? false : true
   }

   isValidData() {
      //patikrinama ar gauti duomanys - objektas:
      const data = this.data;
      if (!IsValid.object(data)) {
         return false;
      }
      return true;
   }

   generateField(item) {
      return `<div class="input-field field">
         <input type="${item.type}" placeholder="${item.placeholder}" id="${item.id}" class="item" autocomplete="off">
         <span class="error-txt"></span>
      </div>`;
   }

   render() {
      const fields = this.data.fields
      const inputFieldsHTML = fields.map(item => this.generateField(item));

      let HTML = `     
         <div class="input-box">
            ${inputFieldsHTML[0]}  
            ${inputFieldsHTML[1]}  
         </div>
         <div class="input-box">
            ${inputFieldsHTML[2]}  
            ${inputFieldsHTML[3]} 
         </div>
         <div class="textarea-field field">
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter Your Message"
               class="item" autocomplete="off"></textarea>
            <span class="error-txt"></span>
         </div>`;

      this.FORM.innerHTML = HTML;
   }

   addEventListeners() {
      /*
      EIGA:
      1. Reikia susirasti atitinkamus laukus, norint juos validuoti;
      2. Issitraukti, kas juose parasyta;
      3. Patikrinti, kas parasyta, ar duomenys teisingi
      4. Paspaudus mygtuka, atitinkamai kas buvo ivesta, pateikti forma arba gauti klaidos pranesima
      Paspaudus mygtuka 'submit' reikia patikrinti, ar visi laukai uzpildyti teisingai
      */

      console.log(this.FORM);
      const fields = this.FORM.querySelectorAll('.item');

      const submitDOM = document.createElement('button');
      submitDOM.classList.add('btn');
      submitDOM.innerText = "Send message";

      const msgDOM = this.FORM.querySelectorAll('.error-txt');

      const isValid = {
         string: (str) => typeof str === 'string' && str.trim() !== '',
         minSize: (str, size) => str.length >= size,
         maxSize: (str, size) => str.length <= size,
         username: (str) => isValid.string(str) && isValid.minSize(str, 3) && isValid.maxSize(str, 20),
         email: (str) => isValid.string(str) && isValid.minSize(str, 6) || isValid.maxSize(str, 50) && str.includes('@'),
         phone: (str) => isValid.string(str),
         subject: (str) => isValid.string(str) && isValid.minSize(str, 4) && isValid.maxSize(str, 50),
         message: (str) => isValid.string(str),
      }

      if (submitDOM) {
         function submitForm(e) {
            e.preventDefault();

            const usernameValid = isValid.username(fields[0].value);
            const emailValid = isValid.email(fields[1].value);
            const phoneValid = isValid.phone(fields[2].value);
            const subjectValid = isValid.subject(fields[3].value);
            const messageValid = isValid.message(fields[4].value);

            if (!usernameValid) {
               msgDOM[0].innerText = 'The name is incorrect';
               fields[0].classList.remove('correctly');
            } else {
               msgDOM[0].innerText = '';
               fields[0].classList.add('correctly');
            }

            if (!emailValid) {
               msgDOM[1].innerText = 'Invalid email address';
               fields[1].classList.remove('correctly');
            } else {
               msgDOM[1].innerText = '';
               fields[1].classList.add('correctly');
            }

            if (!phoneValid) {
               msgDOM[2].innerText = 'Invalid phone number';
               fields[2].classList.remove('correctly');
            } else {
               msgDOM[2].innerText = '';
               fields[2].classList.add('correctly');
            }

            if (!subjectValid) {
               msgDOM[3].innerText = 'This format is invalid';
               fields[3].classList.remove('correctly');
            } else {
               msgDOM[3].innerText = '';
               fields[3].classList.add('correctly');
            }

            if (!messageValid) {
               msgDOM[4].innerText = 'The message contains data in an invalid format';
               fields[4].classList.remove('correctly');
            } else {
               msgDOM[4].innerText = '';
               fields[4].classList.add('correctly');
            }

            if (usernameValid && emailValid && phoneValid && subjectValid && messageValid) {
               sendMail();
            }
         }

         submitDOM.addEventListener("click", submitForm);
      }

      //Galbut iterpti setTimeout arba reset funkcionaluma, kad forma po submitinimo nusiresetintu


      this.FORM.appendChild(submitDOM);
      this.FORM.fields.insertAdjacentHTML('beforeend', msgDOM);

   }
}

export { EmailForm }; 