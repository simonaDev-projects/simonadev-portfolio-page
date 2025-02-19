import { IsValid } from "../isValid/IsValid.js";

class Gallery {
   constructor(selector, data) {
      this.selector = selector;
      this.data = data;

      this.DOM = null;

      this.size = {
         min: 3,
         max: 10
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
      this.enableFilter();
   }

   // Selectoriaus validavimas:
   isValidSelector() {
      if (typeof this.selector !== 'string' || this.selector === '') {
         return false;
      }

      this.DOM = document.querySelector(this.selector);
      return this.DOM === null ? false : true;
   }

   // Duomenu validavimas:
   isValidData() {
      let { size, content, rendering } = this.data;
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

      const validData = [];
      for (const item of content) {
         if (this.isValidGalleryItem(item)) {
            validData.push(item);
         }
      }
      content = validData;
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

   // Metodai patikrinantys kiekviena item objekto sudedamaja dali:
   isValidGalleryItemImage(str) {
      return true;
   }

   isValidGalleryItemAlt(str) {
      return true;
   }

   isValidGalleryItemTitle(str) {
      return true;
   }

   isValidGalleryItemDescription(str) {
      return true;
   }

   isValidGalleryItemTag(tags) {
      return true;
   }

   isValidGalleryItemLinkToCode(str) {
      return true;
   }

   isValidGalleryItemLinkToProject(str) {
      return true;
   }

   isValidGalleryItem(item) {
      if (item.published !== true ||
         !this.isValidGalleryItemImage(item.img) ||
         !this.isValidGalleryItemAlt(item.alt) ||
         !this.isValidGalleryItemTitle(item.title) ||
         !this.isValidGalleryItemDescription(item.description) ||
         !this.isValidGalleryItemTag(item.tag) ||
         !this.isValidGalleryItemLinkToCode(item.linkToCode) ||
         !this.isValidGalleryItemLinkToProject(item.linkToProject)
      ) {
         return false;
      }
      return true;
   }

   generateFilter() {
      const tags = this.dataForRendering
         .map(item => item.tag)
         .reduce((total, item) => [...total, ...item], []);

      const unique = [];

      for (const tag of tags) {
         if (!unique.includes(tag)) {
            unique.push(tag);
         }
      }

      const HTML = unique.map(tag => `<button class="option">${tag}</button>`).join('');
      return HTML;
   }

   generateContent(item) {
      let HTML = '';

      for (const item of this.dataForRendering) {

         HTML += `<div class="col-12 item">
         <img src="${item.img}" alt="${item.alt}">
         <div class="portfolio-layer">
            <h3 class="portfolio-title">${item.title}</h3>
            <p class="portfolio-description">${item.description}</p>
            <small class="tag">#${item.tag}</small>
            <div class="btn-container">
               <a href="${item.linkToCode}" class="btn" target="_blank">Code</a>
               <a href="${item.linkToProject}" class="btn" target="_blank">Project</a>
            </div>
         </div>
      </div>`
      }
      return HTML;
   }


   render() {
      // render paskirtis - i rasta ivieta ispiesti HTML turini
      let HTML = `
      <div class="filter">
      <button class="option active">All</button>
      ${this.generateFilter()}
      </div>
      <div class="gallery" id="gallery">
         ${this.generateContent()}
      </div> 
`;
      this.DOM.innerHTML = HTML;
   }

   enableFilter() {
      const buttonDOM = this.DOM.querySelectorAll('.filter > .option');
      const itemsDOM = this.DOM.querySelectorAll('.gallery > .item');

      for (const button of buttonDOM) {
         button.addEventListener('click', () => {
            const tag = button.innerText;

            if (tag === 'All') {
               // visus rodome:
               for (const item of itemsDOM) {
                  item.classList.remove('hidden');
               }
            } else {
               // dali rodome, dali slepiame:
               for (let i = 0; i < this.dataForRendering.length; i++) {
                  const itemDOM = itemsDOM[i];
                  const data = this.dataForRendering[i];

                  if (data.tag.includes(tag)) {
                     itemDOM.classList.remove('hidden');
                  } else {
                     itemDOM.classList.add('hidden');
                  }
               }
            }

         })
      }
   }
}

export { Gallery };