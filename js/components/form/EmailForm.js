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
      console.log(this.FORM);
      const fields = this.FORM.querySelectorAll('.item');

      // Gaunami visi formos elementai. Dabar reikia suvaliduoti kiekviena atskirai
      console.log(fields);
   }
}

export { EmailForm }; 