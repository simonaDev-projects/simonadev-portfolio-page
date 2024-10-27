const formData = {
   fields: [
      {
         type: 'text',
         placeholder: 'Enter your name',
         id: 'username',
      },
      {
         type: 'text',
         placeholder: 'Enter Email address',
         id: 'email',
      },
      {
         type: 'text',
         placeholder: 'Enter Phone number',
         id: 'phone',
      },
      {
         type: 'text',
         placeholder: 'Enter subject',
         id: 'subject',
      }
   ],

   inputValues: {
      name: "Ona",
      email: "ona@ona.lt",
      phone: "+370 612 34567",
      subject: "Test",
      message: "This is test from Ona...",
   }

};

export { formData };