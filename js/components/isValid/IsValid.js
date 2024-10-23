class IsValid {
   static object(obj) {
      if (typeof obj !== 'object' ||
         obj === null ||
         Array.isArray(obj)
      ) {
         return false;
      }
      return true;
   }

   static nonEmptyArray(arr) {
      return Array.isArray(arr) && arr.length > 0;
   }

   static nonEmptyString(str) {
      return typeof str === 'string' && str !== '';
   }

   static positiveInteger(num) {
      if (!Number.isInteger(num) ||
         num < 0) {
         return false;
      }
      return true;
   }

   static stringSizeInRange(str, min = 1, max = 20) {
      if (!IsValid.positiveInteger(max)) {
         max = 20;
      }
      if (!IsValid.positiveInteger(min)) {
         min = 1;
      }
      if (typeof str !== 'string' ||
         str.length < min ||
         str.length > max) {
         return false;
      }
      return true;
   }
}

export { IsValid };