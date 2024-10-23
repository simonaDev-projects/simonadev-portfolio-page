import { IsValid } from "../isValid/IsValid.js";

class Gallery {
   constructor(selector, data) {
      this.selector = selector;
      this.data = data;

      this.DOM = null;

      this.size = {
         min: 3,
         max: 4
      };

      this.rendering = {
         strategy: 'entry',
         order: 'az',
      };

      this.dataForRendering = [];

      this.init();
   }

   init() {
      if (!this.isValidSelector() ||
         !this.isValidData()) {
         return false;
      }
      this.filterDataForRendering();
      this.render();
   }

   // Selectoriaus validavimas:
   isValidSelector() {
      if (typeof this.selector !== 'string' || this.selector === '') {
         return false;
      }

      this.DOM = document.querySelector(this.selector);
      return this.DOM === null ? false : true;
      // trumpiausias uzrasymas: return !!this.DOM
   }

   // Duomenu validavimas:
   isValidData() {
      const { size, content, rendering } = this.data;
      if (!IsValid.object(this.data)) {
         return false;
      }

      // Validuojam this.data.size:
      // Perrasomos ihardcodintos reiksmes:

      if (!IsValid.object(size)) {
         const { min, max } = size;
         if (IsValid.positiveInteger(min)) {
            this.size.min = min;
         }

         if (IsValid.positiveInteger(max)) {
            this.size.max = max;
         }
      }


      // Validuojam this.data.rendering:
      if (!IsValid.object(rendering)) {
         const { strategy, order } = rendering;
         if (IsValid.positiveInteger(min)) {
            this.rendering.strategy = strategy;
         }

         if (IsValid.positiveInteger(order)) {
            this.rendering.order = order;
         }
      }
      // Validuojam this.data.content:
      if (!IsValid.nonEmptyArray(content)) {
         return false;
      }
      return true;
   }

   filterDataForRendering() {
      const { max } = this.size;
      const { strategy, order } = this.rendering;

      if (strategy === 'entry') {
         this.dataForRendering = this.filterDataByEntry(order)
      }

      if (strategy === 'title') {
         this.dataForRendering = this.filterDataByTitle(order)
      }

      if (strategy === 'random') {
         this.dataForRendering = this.filterDataByTitle(order)
      }
      this.dataForRendering = this.dataForRendering.slice(0, max);
   }

   filterDataByEntry(order) {
      const dataCopy = [...this.data.content]
      return order === 'az' ? dataCopy : dataCopy.reverse();
   }

   filterDataByTitle(order) {
      const dataCopy = [...this.data.content];
      dataCopy.sort((a, b) => a.title > b.title ? 1 : a.title === b.title ? 0 : -1);
      return order === 'az' ? dataCopy : dataCopy.reverse();
   }

   filterDataByRandom() {
      const dataCopy = [...this.data.content];
      return dataCopy;
   }


   render() {
      // render paskirtis - i rasta ivieta ispiesti HTML turini
      let HTML = '';

      console.log(this.dataForRendering);

      this.DOM.innerHTML = HTML;
   }
}

export { Gallery };