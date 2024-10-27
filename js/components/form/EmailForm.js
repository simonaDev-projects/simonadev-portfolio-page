import { IsValid } from "../isValid/IsValid.js";

class EmailForm {
   constructor(selector, data) {
      this.selector = selector;
      this.data = data;

      this.DOM = null;
      this.init();

   }

   init() {
      if (!this.isValidSelector() || !this.isValidData()) {
         return false;
      }
      this.render();
   }

   isValidSelector() {
      if (!IsValid.nonEmptyString(this.selector)) {
         return false;
      }
      this.DOM = document.querySelector(this.selector);
      return this.DOM === null ? false : true
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
            ${inputFieldsHTML[0]}  <!-- User Name -->
            ${inputFieldsHTML[1]}  <!-- Email -->
         </div>
         <div class="input-box">
            ${inputFieldsHTML[2]}  <!-- Phone number -->
            ${inputFieldsHTML[3]}  <!-- Subject -->
         </div>
         <div class="textarea-field field">
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter Your Message"
               class="item" autocomplete="off"></textarea>
            <span class="error-txt"></span>
         </div>`;

      this.DOM.innerHTML = HTML;
   }
}

export { EmailForm }; 